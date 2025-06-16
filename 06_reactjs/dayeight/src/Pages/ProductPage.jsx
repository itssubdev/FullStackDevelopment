// import {useState, useEffect} from "react";
// import axios from "axios";
import {useParams} from "react-router-dom";
import Quantity from "../Components/Quantity";
import ApiFetch from "../learn/CustomHooks/ApiFetch";

function ProductPage() {
    const {id} = useParams();
    // const [data, SetData] = useState({});
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         let datas = await axios.get(`https://fakestoreapi.com/products/${id}`);
    //         SetData(datas.data);
    //         setLoading(false);
    //     }
    //     fetchData();
    // },[id]);
    const{data, loading, error} = ApiFetch(`https://fakestoreapi.com/products/${id}`);

    if(loading){
        return <div>Loading...</div>
    }

  return <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <div class="mb-4">
                    <img id="mainImage" src={data.image} 
                         alt="Product Image" class="w-full h-96 object-contain rounded-lg" />
                </div>
                <div class="grid grid-cols-4 gap-2">
                    <img src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200" 
                         alt="Thumbnail" class="w-full h-20 object-cover rounded cursor-pointer border-2 border-blue-500" 
                          />
                    <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=200" 
                         alt="Thumbnail" class="w-full h-20 object-cover rounded cursor-pointer border-2 border-gray-200 hover:border-blue-500" 
                          />
                    <img src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200" 
                         alt="Thumbnail" class="w-full h-20 object-cover rounded cursor-pointer border-2 border-gray-200 hover:border-blue-500" 
                          />
                    <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=200" 
                         alt="Thumbnail" class="w-full h-20 object-cover rounded cursor-pointer border-2 border-gray-200 hover:border-blue-500" 
                          />
                </div>
            </div>

            <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-4">{data.title}</h1>
                
                <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400">
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                    </div>
                    <span class="text-gray-600 ml-2">({data.rating.count} reviews)</span>
                </div>

                <div class="mb-6">
                    <span class="text-4xl font-bold text-gray-900">${data.price}</span>
                    <span class="text-xl text-gray-500 line-through ml-3">$399.99</span>
                    <span class="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded ml-3">25% OFF</span>
                </div>

                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Description</h3>
                    <p class="text-gray-600">{data.description}</p>
                </div>

                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Key Features</h3>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        <li>Active Noise Cancellation</li>
                        <li>30-hour battery life</li>
                        <li>Bluetooth 5.0 connectivity</li>
                        <li>Premium leather ear cushions</li>
                        <li>Quick charge technology</li>
                    </ul>
                </div>

                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Color</h3>
                    <div class="flex space-x-2">
                        <button class="w-8 h-8 bg-black rounded-full border-2 border-gray-300 focus:border-blue-500"></button>
                        <button class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 focus:border-blue-500"></button>
                        <button class="w-8 h-8 bg-blue-600 rounded-full border-2 border-gray-300 focus:border-blue-500"></button>
                    </div>
                </div>

                <Quantity />

                <div class="flex space-x-4 mb-6">
                    <button class="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>
                    <button class="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                        <i data-lucide="heart" class="w-5 h-5"></i>
                    </button>
                </div>

                <div class="border-t pt-6">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span class="text-gray-500">SKU:</span>
                            <span class="font-medium ml-2">WH-001</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Category:</span>
                            <span class="font-medium ml-2">Electronics</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Brand:</span>
                            <span class="font-medium ml-2">EliteAudio</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Availability:</span>
                            <span class="text-green-600 font-medium ml-2">In Stock</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-16">
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                    <button class="tab-button active py-2 px-1 border-b-2 border-blue-500 font-medium text-sm text-blue-600" >
                        Description
                    </button>
                    <button class="tab-button py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300" >
                        Specifications
                    </button>
                    <button class="tab-button py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300" >
                        Reviews (124)
                    </button>
                </nav>
            </div>

            <div class="mt-8">
                <div id="description" class="tab-content">
                    <div class="prose max-w-none">
                        <h3 class="text-xl font-semibold mb-4">Product Description</h3>
                        <p class="text-gray-600 mb-4">
                            Our Premium Wireless Headphones deliver exceptional audio quality with advanced noise cancellation technology. 
                            Designed for audiophiles and professionals, these headphones provide crystal-clear sound reproduction across 
                            all frequencies.
                        </p>
                        <p class="text-gray-600 mb-4">
                            The ergonomic design ensures comfortable extended listening sessions, while the premium materials guarantee 
                            durability and style. With up to 30 hours of battery life and quick charge capability, you'll never miss 
                            a beat.
                        </p>
                        <h4 class="text-lg font-semibold mb-2">What's in the Box</h4>
                        <ul class="list-disc list-inside text-gray-600">
                            <li>Premium Wireless Headphones</li>
                            <li>USB-C Charging Cable</li>
                            <li>3.5mm Audio Cable</li>
                            <li>Carrying Case</li>
                            <li>User Manual</li>
                        </ul>
                    </div>
                </div>

                <div id="specifications" class="tab-content hidden">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Technical Specifications</h3>
                            <dl class="space-y-2">
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Driver Size:</dt>
                                    <dd class="font-medium">40mm</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Frequency Response:</dt>
                                    <dd class="font-medium">20Hz - 20kHz</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Impedance:</dt>
                                    <dd class="font-medium">32 Ohms</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Sensitivity:</dt>
                                    <dd class="font-medium">105dB</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Bluetooth Version:</dt>
                                    <dd class="font-medium">5.0</dd>
                                </div>
                            </dl>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Physical Specifications</h3>
                            <dl class="space-y-2">
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Weight:</dt>
                                    <dd class="font-medium">250g</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Dimensions:</dt>
                                    <dd class="font-medium">18 x 15 x 8 cm</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Battery Life:</dt>
                                    <dd class="font-medium">30 hours</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Charging Time:</dt>
                                    <dd class="font-medium">2 hours</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt class="text-gray-500">Warranty:</dt>
                                    <dd class="font-medium">2 years</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

                <div id="reviews" class="tab-content hidden">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-1">
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold mb-4">Customer Reviews</h3>
                                <div class="text-center mb-4">
                                    <div class="text-4xl font-bold text-gray-900">4.8</div>
                                    <div class="flex justify-center text-yellow-400 mb-2">
                                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                                    </div>
                                    <div class="text-gray-600">Based on 124 reviews</div>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-600 w-8">5★</span>
                                        <div class="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                                            <div class="bg-yellow-400 h-2 rounded-full" style={{width: "85%"}}></div>
                                        </div>
                                        <span class="text-sm text-gray-600">85%</span>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-600 w-8">4★</span>
                                        <div class="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                                            <div class="bg-yellow-400 h-2 rounded-full" style={{width: "10%"}}></div>
                                        </div>
                                        <span class="text-sm text-gray-600">10%</span>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-600 w-8">3★</span>
                                        <div class="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                                            <div class="bg-yellow-400 h-2 rounded-full" style={{width: "3%"}}></div>
                                        </div>
                                        <span class="text-sm text-gray-600">3%</span>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-600 w-8">2★</span>
                                        <div class="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                                            <div class="bg-yellow-400 h-2 rounded-full" style={{width: "1%"}}></div>
                                        </div>
                                        <span class="text-sm text-gray-600">1%</span>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-600 w-8">1★</span>
                                        <div class="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                                            <div class="bg-yellow-400 h-2 rounded-full" style={{width: "1%"}}></div>
                                        </div>
                                        <span class="text-sm text-gray-600">1%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-2 space-y-6">
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 class="font-semibold text-gray-900">John Smith</h4>
                                        <div class="flex text-yellow-400 mb-1">
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                        </div>
                                    </div>
                                    <span class="text-sm text-gray-500">2 days ago</span>
                                </div>
                                <p class="text-gray-600">Excellent sound quality and comfortable fit. The noise cancellation works perfectly for my daily commute. Highly recommended!</p>
                            </div>

                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 class="font-semibold text-gray-900">Sarah Johnson</h4>
                                        <div class="flex text-yellow-400 mb-1">
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4"></i>
                                        </div>
                                    </div>
                                    <span class="text-sm text-gray-500">1 week ago</span>
                                </div>
                                <p class="text-gray-600">Great headphones for the price. Battery life is impressive and the build quality feels premium. Only minor complaint is the carrying case could be better.</p>
                            </div>

                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 class="font-semibold text-gray-900">Mike Davis</h4>
                                        <div class="flex text-yellow-400 mb-1">
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                        </div>
                                    </div>
                                    <span class="text-sm text-gray-500">2 weeks ago</span>
                                </div>
                                <p class="text-gray-600">Perfect for music production work. The frequency response is very flat and accurate. These have become my go-to headphones for mixing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-16">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <img src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Smart Watch" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-900 mb-2">Smart Fitness Watch</h3>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-gray-900">$199.99</span>
                            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <img src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Gaming Mouse" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-900 mb-2">Wireless Gaming Mouse</h3>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-gray-900">$79.99</span>
                            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Camera Lens" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-900 mb-2">Professional Camera Lens</h3>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-gray-900">$899.99</span>
                            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                    <img src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400" 
                         alt="Coffee Maker" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-900 mb-2">Premium Coffee Maker</h3>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-gray-900">$249.99</span>
                            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
}

export default ProductPage;
