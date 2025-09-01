const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      
          <div>
            <h2 className="text-xl font-bold mb-2">ShopEase</h2>
            <p className="text-sm">Your one-stop shop for everything.</p>
          </div>

      
          <div>
            <h3 className="font-semibold mb-2">Shop</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">All Products</a></li>
              <li><a href="#" className="hover:underline">New Arrivals</a></li>
              <li><a href="#" className="hover:underline">Best Sellers</a></li>
              <li><a href="#" className="hover:underline">Categories</a></li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="hover:text-blue-500">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="hover:text-pink-500">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="hover:text-slate-800">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

        </div>


        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          &copy; <span id="year"></span> ShopEase. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
export default Footer