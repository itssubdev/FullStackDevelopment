
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function FrontendUser() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>;
}

export default FrontendUser;
