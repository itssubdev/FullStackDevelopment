import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import ProductsPage from "./Pages/ProductsPage";
import FrontendUser from "./Pages/FrontendUser";
import Error from "./Pages/Error";
import AuthPage from "./Pages/auth/AuthPage";
import LoginPage from "./Pages/auth/LoginPage";
import RegisterPage from "./Pages/auth/RegisterPage";
import ForgetPassword from "./Pages/auth/ForgetPassword";
import Learn from "./learn/Learn";
import { ToastContainer } from 'react-toastify';
import CheckoutPage from "./Pages/CheckoutPage";

function App() {
  const ref = useRef();
  const GoBacktotTop = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
      ref={ref}
      className="min-h-screen transition-all duration-300 bg-white text-black dark:bg-gray-900 dark:text-white"
    >
        <ToastContainer />
        <Routes>
          <Route path="/" element={<FrontendUser />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="blog" element={<h1>Blog</h1>} />
            <Route path="checkout" element = {<CheckoutPage />} />
          </Route>
          <Route path="auth" element={<AuthPage />}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forget-password" element={<ForgetPassword />} />
          </Route>
          <Route path="*" element={<Error />} />
          <Route path="learn" element={<Learn />} />
        </Routes>
        <button onClick={GoBacktotTop} className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded">
          Go back to top
        </button>
      </div>
    </>
  );
}


export default App;
