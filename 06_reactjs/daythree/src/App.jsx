import { Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import ProductsPage from "./Pages/ProductsPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
