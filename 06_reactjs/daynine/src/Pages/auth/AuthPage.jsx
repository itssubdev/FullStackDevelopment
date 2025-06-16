import {Outlet} from "react-router-dom";
import AuthHeader from "../../Components/AuthHeader";
function AuthPage() {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  )
}

export default AuthPage;
