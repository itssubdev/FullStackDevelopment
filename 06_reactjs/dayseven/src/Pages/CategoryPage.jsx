import React from "react";

function CategoryPage() {
  return <div>
    <div class="bg-white py-8 border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">Product Categories</h1>
            <p class="text-gray-600 mt-2">Browse our wide range of product categories</p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="category.html?cat=electronics" class="group bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div class="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600">
                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                    <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" 
                         alt="Electronics" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center text-white">
                            <i data-lucide="smartphone" class="w-16 h-16 mx-auto mb-4"></i>
                            <h3 class="text-2xl font-bold">Electronics</h3>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 mb-4">Latest gadgets, smartphones, laptops, and electronic accessories</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-blue-600">45 Products</span>
                        <span class="text-blue-600 group-hover:text-blue-800">
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </span>
                    </div>
                </div>
            </a>

            <a href="category.html?cat=fashion" class="group bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div class="relative h-48 bg-gradient-to-br from-purple-500 to-purple-600">
                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                    <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" 
                         alt="Fashion" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center text-white">
                            <i data-lucide="shirt" class="w-16 h-16 mx-auto mb-4"></i>
                            <h3 class="text-2xl font-bold">Fashion</h3>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 mb-4">Trendy clothing, shoes, accessories for men and women</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-purple-600">32 Products</span>
                        <span class="text-purple-600 group-hover:text-purple-800">
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </span>
                    </div>
                </div>
            </a>

            <a href="category.html?cat=home" class="group bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div class="relative h-48 bg-gradient-to-br from-green-500 to-green-600">
                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                    <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" 
                         alt="Home & Garden" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center text-white">
                            <i data-lucide="home" class="w-16 h-16 mx-auto mb-4"></i>
                            <h3 class="text-2xl font-bold">Home & Garden</h3>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 mb-4">Furniture, decor, kitchen appliances, and garden tools</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-green-600">28 Products</span>
                        <span class="text-green-600 group-hover:text-green-800">
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </span>
                    </div>
                </div>
            </a>

            <a href="category.html?cat=sports" class="group bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div class="relative h-48 bg-gradient-to-br from-red-500 to-red-600">
                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                    <img src="https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600" 
                         alt="Sports & Fitness" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center text-white">
                            <i data-lucide="dumbbell" class="w-16 h-16 mx-auto mb-4"></i>
                            <h3 class="text-2xl font-bold">Sports & Fitness</h3>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 mb-4">Exercise equipment, sportswear, and outdoor gear</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-red-600">19 Products</span>
                        <span class="text-red-600 group-hover:text-red-800">
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </span>
                    </div>
                </div>
            </a>

            <a href="category.html?cat=books" class="group bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div class="relative h-48 bg-gradient-to-br from-yellow-500 to-yellow-600">
                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                    <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600" 
                         alt="Books & Media" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center text-white">
                            <i data-lucide="book" class="w-16 h-16 mx-auto mb-4"></i>
                            <h3 class="text-2xl font-bold">Books & Media</h3>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 mb-4">Books, magazines, movies, music, and educational content</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-yellow-600">15 Products</span>
                        <span class="text-yellow-600 group-hover:text-yellow-800">
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </span>
                    </div>
                </div>
            </a>

            <a href="category.html?cat=beauty" class="group bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div class="relative h-48 bg-gradient-to-br from-pink-500 to-pink-600">
                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                    <img src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600" 
                         alt="Beauty & Personal Care" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center text-white">
                            <i data-lucide="sparkles" class="w-16 h-16 mx-auto mb-4"></i>
                            <h3 class="text-2xl font-bold">Beauty & Care</h3>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 mb-4">Skincare, makeup, fragrances, and personal care products</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-pink-600">23 Products</span>
                        <span class="text-pink-600 group-hover:text-pink-800">
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </span>
                    </div>
                </div>
            </a>
        </div>

        <div class="mt-16">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Featured Collections</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                    <h3 class="text-2xl font-bold mb-4">New Arrivals</h3>
                    <p class="mb-6">Discover the latest products across all categories</p>
                    <a href="products.html?filter=new" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                        Shop New Arrivals
                    </a>
                </div>
                <div class="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 text-white">
                    <h3 class="text-2xl font-bold mb-4">Sale Items</h3>
                    <p class="mb-6">Save big on selected products with up to 50% off</p>
                    <a href="products.html?filter=sale" class="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                        Shop Sale Items
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>;
}

export default CategoryPage;
