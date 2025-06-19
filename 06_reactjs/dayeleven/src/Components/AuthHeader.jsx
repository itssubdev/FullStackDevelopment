import React from "react";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
function AuthHeader() {
  return (
  <>
    <header class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <a href="index.html" class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <i data-lucide="shopping-cart" class="w-5 h-5 text-white"></i>
                    </div>
                    <span class="text-xl font-bold text-gray-900">EliteStore</span>
                </a>
                <Link to="/" class="text-gray-700 hover:text-blue-600 transition-colors">
                    <GrLinkNext class="w-5 h-5 inline mr-2"></GrLinkNext>
                    Back to Store
                </Link>
            </div>
        </div>
    </header>
  </>
  );
}

export default AuthHeader;
