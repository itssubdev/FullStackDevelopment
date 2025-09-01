import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {totalQuantity} = useSelector(state => state.cart)
  
  const {isAuthenticated} = useSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
    toast.success("User logout successfully.")
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-800">
            ShopEase
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="text-slate-700 hover:text-slate-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-slate-700 hover:text-slate-900">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/deals" className="text-slate-700 hover:text-slate-900">
                Deals
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-slate-700 hover:text-slate-900">
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons & Auth Links */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/account">
                  <User className="w-6 h-6 text-slate-700 hover:text-slate-900" />
                  {/* <span>{user?.username}</span> */}
                </Link>
                <button onClick={handleLogout} className="text-slate-700 hover:text-slate-900 cursor-pointer">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-slate-700 hover:text-slate-900"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-slate-800 text-white px-3 py-1 rounded hover:bg-slate-700"
                >
                  Register
                </Link>
              </>
            )}

            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-slate-700 hover:text-slate-900" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-slate-700 text-white text-xs rounded-full px-1">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-slate-700 hover:text-slate-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-slate-300 rounded-full px-4 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block text-slate-700 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block text-slate-700 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/deals"
                className="block text-slate-700 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Deals
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-slate-700 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Auth Links in Mobile */}
          <div className="pt-3 border-t border-slate-200">
            {isAuthenticated ? (
              <>
                <Link
                  to="/account"
                  className="block text-slate-700 hover:text-slate-900 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Account
                </Link>
                <button className="block w-full text-left text-slate-700 hover:text-slate-900 py-1">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-slate-700 hover:text-slate-900 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block bg-slate-800 text-white px-3 py-1 rounded mt-2 text-center hover:bg-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;