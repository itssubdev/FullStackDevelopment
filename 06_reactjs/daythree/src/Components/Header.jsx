import React from "react";

function Header() {
  return <div>
     <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <i data-lucide="shopping-cart" class="w-5 h-5 text-white"></i>
                    </div>
                    <span class="text-xl font-bold text-gray-900">HamroShop</span>
                </div>
                <nav class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                    <a href="products.html" class="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
                    <a href="categories.html" class="text-gray-700 hover:text-blue-600 transition-colors">Categories</a>
                    <a href="blog.html" class="text-blue-600 font-medium">Blog</a>
                </nav>
                <div class="flex items-center space-x-4">
                    <a href="cart.html" class="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
                        <i data-lucide="shopping-cart" class="w-6 h-6"></i>
                        <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                    </a>
                    <a href="login.html" class="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                        <i data-lucide="user" class="w-6 h-6"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
  </div>;
}

export default Header;
