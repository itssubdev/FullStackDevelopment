import { Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import ProductsPage from "./Pages/ProductsPage";
import FrontendUser from "./Pages/FrontendUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <FrontendUser /> }>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="blog" element={<h1>Blog</h1> } />
        </Route>
        <Route path="login" element={<h1>Login</h1> } />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
