import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginFormValidationSchema } from "../utils/validate";
import { newRequest } from "../utils/newRequest";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import GoogleAuthButton from "../components/GoogleAuthButton";

const Login = () => {
  const {register,handleSubmit, formState:{errors,isSubmitting}} = useForm({
    resolver: yupResolver(loginFormValidationSchema),
    shouldFocusError: false
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const from = location.state?.from || '/'

  console.log(from);

  const onSubmit = async (data) => {
    try {
      const response = await newRequest.post('/auth/login/',data)
      console.log(response.data);
      console.log(response.data.role);
        dispatch(loginSuccess(response.data))
    

      const role = response.data.role?.toLowerCase();

      if (role === "admin") {
        // safer navigation
        navigate("/dashboard/main", { replace: true });
      }

      toast.success("User loggedIn successfully.")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
      <div className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-slate-700">Username</label>
            <input
              {...register('username')}
              type="text"
              className={`w-full border rounded px-3 py-2 ${errors.username ? 'border-red-500' : 'border-slate-700 '}`}
              placeholder="username"
            />
            {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>}
          </div>
          <div>
            <label className="block text-slate-700">Password</label>
            <input
            {...register('password')}
              type="password"
              className={`w-full border rounded px-3 py-2 ${errors.password ? 'border-red-500' : 'border-slate-700 '}`}
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 disabled:bg-slate-800/80 text-white py-2 rounded hover:bg-slate-700 transition"
            disabled={isSubmitting}
          >
            { isSubmitting ? "submitting..." : "Login"}
          </button>
        </form>
        <p className="text-sm text-slate-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-slate-800 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>

      <GoogleAuthButton />
    </div>
  );
};

export default Login;