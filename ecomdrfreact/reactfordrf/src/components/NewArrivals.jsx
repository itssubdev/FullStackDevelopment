import React from "react";

const NewArrivals = () => {
  // Sample products — replace with props or API data
  const products = [
    {
      id: 1,
      name: "Casual Shirt",
      price: "$39.99",
      image: "https://i.imgur.com/wXuQ7bm.jpeg",
    },
    {
      id: 2,
      name: "Sneakers",
      price: "$59.99",
      image: "https://i.imgur.com/cBuLvBi.jpeg",
    },
    {
      id: 3,
      name: "Leather Bag",
      price: "$89.99",
      image: "https://i.imgur.com/KeqG6r4.jpeg",
    },
    {
      id: 4,
      name: "Wrist Watch",
      price: "$129.99",
      image: "https://i.imgur.com/KeqG6r4.jpeg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-slate-700 font-semibold">{product.name}</h3>
              <p className="text-slate-500">{product.price}</p>
              <button className="mt-3 w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;