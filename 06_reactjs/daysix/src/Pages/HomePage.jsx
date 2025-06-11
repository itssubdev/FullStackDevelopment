import React from "react";

function HomePage() {
  return <div>
    <section class="hero-gradient text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="animate-fade-in">
                    <h1 class="text-5xl font-bold mb-6">Discover Premium Products</h1>
                    <p class="text-xl mb-8 text-blue-100">Shop the latest trends with unbeatable quality and prices. Your satisfaction is our priority.</p>
                    <div class="flex space-x-4">
                        <a href="products.html" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Shop Now</a>
                        <a href="#featured" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Learn More</a>
                    </div>
                </div>
                <div class="animate-fade-in">
                    <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800" 
                         alt="Hero Image" class="rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                <p class="text-gray-600">Explore our wide range of product categories</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <a href="category.html?cat=electronics" class="group text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors card-hover">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200">
                        <i data-lucide="smartphone" class="w-8 h-8 text-blue-600"></i>
                    </div>
                    <h3 class="font-semibold text-gray-900">Electronics</h3>
                    <p class="text-sm text-gray-500">45 Products</p>
                </a>
                <a href="category.html?cat=fashion" class="group text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors card-hover">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200">
                        <i data-lucide="shirt" class="w-8 h-8 text-purple-600"></i>
                    </div>
                    <h3 class="font-semibold text-gray-900">Fashion</h3>
                    <p class="text-sm text-gray-500">32 Products</p>
                </a>
                <a href="category.html?cat=home" class="group text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors card-hover">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200">
                        <i data-lucide="home" class="w-8 h-8 text-green-600"></i>
                    </div>
                    <h3 class="font-semibold text-gray-900">Home & Garden</h3>
                    <p class="text-sm text-gray-500">28 Products</p>
                </a>
                <a href="category.html?cat=sports" class="group text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors card-hover">
                    <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200">
                        <i data-lucide="dumbbell" class="w-8 h-8 text-red-600"></i>
                    </div>
                    <h3 class="font-semibold text-gray-900">Sports</h3>
                    <p class="text-sm text-gray-500">19 Products</p>
                </a>
                <a href="category.html?cat=books" class="group text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors card-hover">
                    <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200">
                        <i data-lucide="book" class="w-8 h-8 text-yellow-600"></i>
                    </div>
                    <h3 class="font-semibold text-gray-900">Books</h3>
                    <p class="text-sm text-gray-500">15 Products</p>
                </a>
                <a href="category.html?cat=beauty" class="group text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors card-hover">
                    <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200">
                        <i data-lucide="sparkles" class="w-8 h-8 text-pink-600"></i>
                    </div>
                    <h3 class="font-semibold text-gray-900">Beauty</h3>
                    <p class="text-sm text-gray-500">23 Products</p>
                </a>
            </div>
        </div>
    </section>

    <section id="featured" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
                <p class="text-gray-600">Handpicked products just for you</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400" 
                             alt="Wireless Headphones" class="w-full h-48 object-cover" />
                        <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">25% OFF</div>
                        <button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                            <i data-lucide="heart" class="w-4 h-4 text-gray-600"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-900 mb-2">Premium Wireless Headphones</h3>
                        <div class="flex items-center mb-2">
                            <div class="flex text-yellow-400">
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            </div>
                            <span class="text-sm text-gray-500 ml-2">(124 reviews)</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-2xl font-bold text-gray-900">$299.99</span>
                                <span class="text-sm text-gray-500 line-through ml-2">$399.99</span>
                            </div>
                        </div>
                        <div class="mt-4 flex space-x-2">
                            <a href="product.html?id=1" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">View Details</a>
                            <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                                <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400" 
                             alt="Smart Watch" class="w-full h-48 object-cover" />
                        <div class="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm">New</div>
                        <button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                            <i data-lucide="heart" class="w-4 h-4 text-gray-600"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-900 mb-2">Smart Fitness Watch</h3>
                        <div class="flex items-center mb-2">
                            <div class="flex text-yellow-400">
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4"></i>
                            </div>
                            <span class="text-sm text-gray-500 ml-2">(89 reviews)</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-2xl font-bold text-gray-900">$199.99</span>
                                <span class="text-sm text-gray-500 line-through ml-2">$249.99</span>
                            </div>
                        </div>
                        <div class="mt-4 flex space-x-2">
                            <a href="product.html?id=2" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">View Details</a>
                            <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                                <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400" 
                             alt="Camera Lens" class="w-full h-48 object-cover" />
                        <button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                            <i data-lucide="heart" class="w-4 h-4 text-gray-600"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-900 mb-2">Professional Camera Lens</h3>
                        <div class="flex items-center mb-2">
                            <div class="flex text-yellow-400">
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            </div>
                            <span class="text-sm text-gray-500 ml-2">(67 reviews)</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-2xl font-bold text-gray-900">$899.99</span>
                            </div>
                        </div>
                        <div class="mt-4 flex space-x-2">
                            <a href="product.html?id=3" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">View Details</a>
                            <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                                <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=400" 
                             alt="Office Chair" class="w-full h-48 object-cover" />
                        <div class="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">Best Seller</div>
                        <button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                            <i data-lucide="heart" class="w-4 h-4 text-gray-600"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-900 mb-2">Ergonomic Office Chair</h3>
                        <div class="flex items-center mb-2">
                            <div class="flex text-yellow-400">
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <i data-lucide="star" class="w-4 h-4"></i>
                            </div>
                            <span class="text-sm text-gray-500 ml-2">(156 reviews)</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-2xl font-bold text-gray-900">$449.99</span>
                                <span class="text-sm text-gray-500 line-through ml-2">$599.99</span>
                            </div>
                        </div>
                        <div class="mt-4 flex space-x-2">
                            <a href="product.html?id=4" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">View Details</a>
                            <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                                <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="products.html" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">View All Products</a>
            </div>
        </div>
    </section>

    <section class="py-16 bg-blue-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p class="text-blue-100 mb-8">Subscribe to our newsletter for the latest deals and updates</p>
            <div class="max-w-md mx-auto flex">
                <input type="email" placeholder="Enter your email" 
                       class="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <button class="bg-blue-800 text-white px-6 py-3 rounded-r-lg hover:bg-blue-900 transition-colors">Subscribe</button>
            </div>
        </div>
    </section>
  </div>;
}

export default HomePage;
