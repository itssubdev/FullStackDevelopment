import React from "react";

function Footer() {
  return <div>
    <footer class="bg-gray-900 text-white py-12 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <i data-lucide="shopping-cart" class="w-5 h-5 text-white"></i>
                        </div>
                        <span class="text-xl font-bold">EliteStore</span>
                    </div>
                    <p class="text-gray-400">Your trusted partner for premium products.</p>
                </div>
                <div>
                    <h3 class="font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="index.html" class="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="products.html" class="text-gray-400 hover:text-white">Products</a></li>
                        <li><a href="categories.html" class="text-gray-400 hover:text-white">Categories</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4">Customer Service</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Contact Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Returns</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4">Contact Info</h3>
                    <p class="text-gray-400">123 Store Street, City, State 12345</p>
                    <p class="text-gray-400">(555) 123-4567</p>
                </div>
            </div>
        </div>
    </footer>
  </div>;
}

export default Footer;
