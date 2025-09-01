import { GoogleLogin } from "@react-oauth/google";
import { newRequest } from "../utils/newRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/authSlice";
import toast from "react-hot-toast";

const GoogleAuthButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const handleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential; // Google ID token

      // Send token to backend
      const res = await newRequest.post("/auth/google/", {
        token
      });

      // dispatch(loginSuccess(res.data))
      // toast.success("User loggedin sucessfully.")
      // navigate('/')

      console.log(res.data);

      console.log("Login success:", res.data);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleAuthButton;