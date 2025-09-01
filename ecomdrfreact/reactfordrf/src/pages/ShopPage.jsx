import { useState } from "react";
import { useCategories, useProducts } from "../api/fetchApi";
import { Link } from "react-router-dom";

const Shop = () => {
const [selectedCategory, setSelectedCategory] = useState("");


const {data:categories} = useCategories()

const {data,isLoading,isError,error} = useProducts(selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
      {/* Filter Dropdown */}
      <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Shop</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-slate-300 rounded px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          <option value="">All</option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {
              isLoading ? "loading...":
              isError ? <p>Error: {error.message}</p> :
              data.length === 0 ? "No products":
              data.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-slate-700 font-semibold truncate">{product.name}</h3>
              <p className="text-slate-500">{product.price}</p>
              <button className="mt-3 w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition cursor-pointer">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;