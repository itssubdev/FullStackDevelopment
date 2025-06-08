import React from "react";

function ProductsPage() {
  return <div>
    <div class="bg-white py-8 border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">All Products</h1>
            <p class="text-gray-600 mt-2">Discover our complete collection of premium products</p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div class="lg:col-span-1">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold mb-4">Filters</h2>
                    
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
                        <input type="text" placeholder="Search products..." 
                               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <span class="ml-2 text-sm text-gray-600">Electronics (45)</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm text-gray-600">Fashion (32)</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm text-gray-600">Home & Garden (28)</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
                                <span class="ml-2 text-sm text-gray-600">Sports (19)</span>
                            </label>
                        </div>
                    </div>

                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input type="radio" name="price" class="text-blue-600 focus:ring-blue-500" />
                                <span class="ml-2 text-sm text-gray-600">Under $50</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="price" class="text-blue-600 focus:ring-blue-500" />
                                <span class="ml-2 text-sm text-gray-600">$50 - $100</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="price" class="text-blue-600 focus:ring-blue-500" />
                                <span class="ml-2 text-sm text-gray-600">$100 - $500</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="price" class="text-blue-600 focus:ring-blue-500" />
                                <span class="ml-2 text-sm text-gray-600">Over $500</span>
                            </label>
                        </div>
                    </div>

                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <div class="ml-2 flex text-yellow-400">
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                </div>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <div class="ml-2 flex text-yellow-400">
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4"></i>
                                </div>
                                <span class="ml-1 text-sm text-gray-600">& up</span>
                            </label>
                        </div>
                    </div>

                    <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Apply Filters
                    </button>
                </div>
            </div>

            <div class="lg:col-span-3">
                <div class="flex justify-between items-center mb-6">
                    <div class="text-gray-600">
                        Showing 1-12 of 48 products
                    </div>
                    <div class="flex items-center space-x-4">
                        <select class="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                            <option>Best Rating</option>
                        </select>
                        <div class="flex border border-gray-300 rounded-lg">
                            <button class="p-2 bg-blue-600 text-white rounded-l-lg">
                                <i data-lucide="grid-3x3" class="w-4 h-4"></i>
                            </button>
                            <button class="p-2 text-gray-600 hover:bg-gray-50 rounded-r-lg">
                                <i data-lucide="list" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <span class="text-sm text-gray-500 ml-2">(124)</span>
                            </div>
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <span class="text-xl font-bold text-gray-900">$299.99</span>
                                    <span class="text-sm text-gray-500 line-through ml-2">$399.99</span>
                                </div>
                            </div>
                            <div class="flex space-x-2">
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
                                <span class="text-sm text-gray-500 ml-2">(89)</span>
                            </div>
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <span class="text-xl font-bold text-gray-900">$199.99</span>
                                    <span class="text-sm text-gray-500 line-through ml-2">$249.99</span>
                                </div>
                            </div>
                            <div class="flex space-x-2">
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
                                <span class="text-sm text-gray-500 ml-2">(67)</span>
                            </div>
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <span class="text-xl font-bold text-gray-900">$899.99</span>
                                </div>
                            </div>
                            <div class="flex space-x-2">
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
                                <span class="text-sm text-gray-500 ml-2">(156)</span>
                            </div>
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <span class="text-xl font-bold text-gray-900">$449.99</span>
                                    <span class="text-sm text-gray-500 line-through ml-2">$599.99</span>
                                </div>
                            </div>
                            <div class="flex space-x-2">
                                <a href="product.html?id=4" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">View Details</a>
                                <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                                    <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                        <div class="relative">
                            <img src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400" 
                                 alt="Gaming Mouse" class="w-full h-48 object-cover" />
                            <button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                                <i data-lucide="heart" class="w-4 h-4 text-gray-600"></i>
                            </button>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-900 mb-2">Wireless Gaming Mouse</h3>
                            <div class="flex items-center mb-2">
                                <div class="flex text-yellow-400">
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4"></i>
                                </div>
                                <span class="text-sm text-gray-500 ml-2">(203)</span>
                            </div>
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <span class="text-xl font-bold text-gray-900">$79.99</span>
                                    <span class="text-sm text-gray-500 line-through ml-2">$99.99</span>
                                </div>
                            </div>
                            <div class="flex space-x-2">
                                <a href="product.html?id=5" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">View Details</a>
                                <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                                    <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                        <div class="relative">
                            <img src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400" 
                                 alt="Coffee Maker" class="w-full h-48 object-cover" />
                            <button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                                <i data-lucide="heart" class="w-4 h-4 text-gray-600"></i>
                            </button>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-900 mb-2">Premium Coffee Maker</h3>
                            <div class="flex items-center mb-2">
                                <div class="flex text-yellow-400">
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                </div>
                                <span class="text-sm text-gray-500 ml-2">(91)</span>
                            </div>
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <span class="text-xl font-bold text-gray-900">$249.99</span>
                                </div>
                            </div>
                            <div class="flex space-x-2">
                                <a href="product.html?id=6" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">View Details</a>
                                <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                                    <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-12">
                    <nav class="flex items-center space-x-2">
                        <button class="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                            <i data-lucide="chevron-left" class="w-4 h-4"></i>
                        </button>
                        <button class="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                        <button class="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                        <button class="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
                        <button class="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">4</button>
                        <button class="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                            <i data-lucide="chevron-right" class="w-4 h-4"></i>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  </div>;
}

export default ProductsPage;
// rfce + enter