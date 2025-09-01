import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
          Upgrade Your Style with Our New Collection
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Discover the latest trends and shop from our curated selection of premium products,
          designed to elevate your everyday look.
        </p>
        <div className="mt-6">
          <Link
            to="/shop"
            className="bg-slate-800 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;