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

function App() {
  const ref = useRef();
  const GoBacktotTop = ()=>{
    ref.current.scrollIntoView({behavior:"smooth"})
  }
  return (
    <>
    <div ref={ref}></div>
      <Routes>
        <Route path="/" element={ <FrontendUser /> }>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="blog" element={<h1>Blog</h1> } />
        </Route>
        <Route path="auth" element={<AuthPage /> } >
          <Route index element={<LoginPage /> } />
          <Route path="register" element={<RegisterPage /> } />
          <Route path="forget-password" element={<ForgetPassword /> } />
        </Route>
        <Route path="*" element={<Error /> } />
        <Route path="learn" element={<Learn /> } />
      </Routes>
      <button onClick={GoBacktotTop}>Go back to top</button>
    </>
  );
}

export default App;
