import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GrLogin } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
import ToggleBar from "../Components/ToggleBar";
import { useSelector } from "react-redux";

function Header() {
    const items = useSelector((state) => state.cart.totalItems);
    const [toggle, setToggle] = useState(false);
    function ToggleMenu(){
        setToggle(!toggle);
    }
  return <div>
     <header className="bg-white shadow-lg sticky top-0 z-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <i data-lucide="shopping-cart" className="w-5 h-5 text-white"></i>
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">HamroShop</span>
                </div>
                <nav className="hidden md:flex space-x-8 ">
                    <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-medium ": " dark:text-white text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Home</NavLink>
                    <NavLink to="/products" className={({isActive}) => isActive ? "text-blue-600 font-medium ": "dark:text-white text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Products</NavLink>
                    <NavLink to="/category" className={({isActive}) => isActive ? "text-blue-600 font-medium": "dark:text-white text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Categories</NavLink>
                    <NavLink to="/blog" className={({isActive}) => isActive ? "text-blue-600 font-medium ": "dark:text-white text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Blog</NavLink>
                </nav>
                <div className="flex items-center space-x-4">
                    <NavLink to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
                        <IoCartOutline className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{items}</span>
                    </NavLink>
                    <NavLink to="/auth" className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                        <GrLogin className="w-6 h-6"></GrLogin>
                    </NavLink>
                    <ToggleBar />
                    <FaBarsStaggered onClick={ToggleMenu} className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors md:hidden" />
                </div>
            </div>
        </div>
    </header>
    {
        toggle && <>
            <nav className="absolute top-0 left-0 w-[60vw] fixed h-screen bg-white flex space-x-8 flex-col items-center justify-center text-center gap-10 md:hidden">
                    <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-medium ": "text-center dark:text-white text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Home</NavLink>
                    <NavLink to="/products" className={({isActive}) => isActive ? "text-blue-600 font-medium ": "text-center dark:text-white text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Products</NavLink>
                    <NavLink to="/category" className={({isActive}) => isActive ? "text-blue-600 font-medium": " text-center dark:text-white text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Categories</NavLink>
                    <NavLink to="/blog" className={({isActive}) => isActive ? "text-blue-600 font-medium ": "text-center  dark:text-white text-gray-700 hover:text-blue-600 transition-colors text-blue-600 font-medium"}>Blog</NavLink>
            </nav>
        </>
    }
  </div>;
}

export default Header;
