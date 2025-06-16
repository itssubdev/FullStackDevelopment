import React from "react";

function CartPage() {
  return <div>
    <nav className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
                <a href="index.html" className="text-gray-500 hover:text-blue-600">Home</a>
                <i data-lucide="chevron-right" className="w-4 h-4 text-gray-400"></i>
                <span className="text-gray-900">Shopping Cart</span>
            </div>
        </div>
    </nav>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-4">
                            <img src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200" 
                                 alt="Wireless Headphones" className="w-20 h-20 object-cover rounded-lg" />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">Premium Wireless Headphones</h3>
                                <p className="text-gray-600">Color: Black</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-xl font-bold text-gray-900">$299.99</span>
                                    <span className="text-sm text-gray-500 line-through ml-2">$399.99</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50" onclick="updateQuantity(1, -1)">
                                    <i data-lucide="minus" className="w-4 h-4"></i>
                                </button>
                                <span id="qty-1" className="text-lg font-semibold">2</span>
                                <button className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50" onclick="updateQuantity(1, 1)">
                                    <i data-lucide="plus" className="w-4 h-4"></i>
                                </button>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-gray-900">$599.98</div>
                                <button className="text-red-600 hover:text-red-800 mt-2" onclick="removeItem(1)">
                                    <i data-lucide="trash-2" className="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-4">
                            <img src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200" 
                                 alt="Smart Watch" className="w-20 h-20 object-cover rounded-lg" />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">Smart Fitness Watch</h3>
                                <p className="text-gray-600">Color: Silver</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-xl font-bold text-gray-900">$199.99</span>
                                    <span className="text-sm text-gray-500 line-through ml-2">$249.99</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50" onclick="updateQuantity(2, -1)">
                                    <i data-lucide="minus" className="w-4 h-4"></i>
                                </button>
                                <span id="qty-2" className="text-lg font-semibold">1</span>
                                <button className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50" onclick="updateQuantity(2, 1)">
                                    <i data-lucide="plus" className="w-4 h-4"></i>
                                </button>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-gray-900">$199.99</div>
                                <button className="text-red-600 hover:text-red-800 mt-2" onclick="removeItem(2)">
                                    <i data-lucide="trash-2" className="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex justify-between items-center">
                            <a href="products.html" className="text-blue-600 hover:text-blue-800 font-medium">
                                <i data-lucide="arrow-left" className="w-4 h-4 inline mr-2"></i>
                                Continue Shopping
                            </a>
                            <button className="text-red-600 hover:text-red-800 font-medium" onclick="clearCart()">
                                <i data-lucide="trash-2" className="w-4 h-4 inline mr-2"></i>
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Coupon Code</h3>
                    <div className="flex space-x-4">
                        <input type="text" placeholder="Enter coupon code" 
                               className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal (3 items)</span>
                            <span className="font-semibold">$799.97</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-semibold">$9.99</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span className="font-semibold">$64.00</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                            <span>Discount</span>
                            <span>-$50.00</span>
                        </div>
                        <hr className="border-gray-200" />
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>$823.96</span>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                        Proceed to Checkout
                    </button>

                    <div className="text-center text-sm text-gray-500 mb-4">
                        <i data-lucide="shield-check" className="w-4 h-4 inline mr-1"></i>
                        Secure checkout with SSL encryption
                    </div>

                    <div className="border-t pt-4">
                        <p className="text-sm text-gray-600 mb-2">We accept:</p>
                        <div className="flex space-x-2">
                            <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">VISA</div>
                            <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>
                            <div className="w-8 h-6 bg-blue-800 rounded text-white text-xs flex items-center justify-center">AMEX</div>
                            <div className="w-8 h-6 bg-yellow-500 rounded text-white text-xs flex items-center justify-center">PP</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Camera Lens" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Professional Camera Lens</h3>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">$899.99</span>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Office Chair" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Ergonomic Office Chair</h3>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">$449.99</span>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Gaming Mouse" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Wireless Gaming Mouse</h3>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">$79.99</span>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Coffee Maker" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Premium Coffee Maker</h3>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">$249.99</span>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
}

export default CartPage;
