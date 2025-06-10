import React from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GrLogin } from "react-icons/gr";

function Header() {
  return <div>
     <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <i data-lucide="shopping-cart" className="w-5 h-5 text-white"></i>
                    </div>
                    <span className="text-xl font-bold text-gray-900">HamroShop</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-medium": "text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Home</NavLink>
                    <NavLink to="/products" className={({isActive}) => isActive ? "text-blue-600 font-medium": "text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Products</NavLink>
                    <NavLink to="/category" className={({isActive}) => isActive ? "text-blue-600 font-medium": "text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Categories</NavLink>
                    <NavLink to="/blog" className={({isActive}) => isActive ? "text-blue-600 font-medium": "text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Blog</NavLink>
                </nav>
                <div className="flex items-center space-x-4">
                    <NavLink to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
                        <IoCartOutline className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                    </NavLink>
                    <NavLink to="/register" className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                        <GrLogin className="w-6 h-6"></GrLogin>
                    </NavLink>
                </div>
            </div>
        </div>
    </header>
  </div>;
}

export default Header;
