import { Link } from "react-router-dom";
import {useQuery} from '@tanstack/react-query'

function CategoryPage() {
    const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://ecommerce.bhandarishishir.com.np/api/category/').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return <div>
    <div class="bg-white py-8 border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">All Categories Categories</h1>
            <p class="text-gray-600 mt-2">Browse our wide range of product categories</p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                data.map((items)=>{
                    return (
                            <Link key={items.id} href="category.html?cat=electronics" class="group bg-white rounded-lg shadow-md overflow-hidden card-hover">
                        <div class="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600">
                            <div class="absolute inset-0 "></div>
                            <img src={items.image}
                                alt="Electronics" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="text-center text-white">
                                    <i data-lucide="smartphone" class="w-16 h-16 mx-auto mb-4"></i>
                                    <h3 class="text-2xl font-bold">{items.name}</h3>
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
                    </Link>
                    )
                })
            }

           
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
