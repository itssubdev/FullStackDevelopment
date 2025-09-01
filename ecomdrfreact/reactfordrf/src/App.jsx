import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SingleProduct from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./utils/ProtectedRoute";
import AuthRedirect from "./utils/AuthRedirect";
import UserLayout from "./utils/UserLayout";
import AdminLayout from "./utils/AdminLayout";
import Main from "./pages/adminpages/Main";
import CategoryList from "./pages/adminpages/CategoryList";
import CategoryForm from "./pages/adminpages/CategoryForm";
import ProductList from "./pages/adminpages/ProductList";
import ProductForm from "./pages/adminpages/ProductForm";
import UpdateProductForm from "./pages/adminpages/UpdateProductForm";
import CheckOutForm from "./pages/CheckOutForm";
import OrderList from "./pages/OrderList";
import EsewaForm from "./pages/EsewaForm";
import EsewaSuccessPage from "./pages/EsewaSuccessPage";

const App = () => {
  return (
    <>
      <Toaster />

      <Routes>
        {/* user layout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<SingleProduct />} />

          {/* auth redirect */}
          <Route element={<AuthRedirect />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* protected route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<CartPage />} />
          </Route>
           <Route path="/checkout" element={<CheckOutForm />} />
           <Route path="/order/lists" element={<OrderList />} />
           <Route path="/esewa" element={<EsewaForm />} />
           <Route path="/esewa/success/:id" element={<EsewaSuccessPage />} />
        </Route>

        

        {/* admin layout */}
        <Route path="/dashboard" element={<AdminLayout />}>
           <Route path="main" element={<Main />} />
           <Route path="categories/list" element={<CategoryList />} />
           <Route path="categories/add" element={<CategoryForm />} />
           <Route path="products/list" element={<ProductList />} />
           <Route path="products/add" element={<ProductForm />} />
           <Route path="products/update" element={<UpdateProductForm />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;