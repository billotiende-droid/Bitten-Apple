import { Apple, Search, User, ShoppingCart } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 bg-gray-300 p-6 border-b border-gray-300 rounded-xl max-w-full">
      <div className="flex items-center max-w-7xl mx-auto w-full ml-7">
        {/* App Title */}
        <div className="flex items- centre gap-2">
          <Apple className="w-8 h-8 text-black" />
          <h1 className="font-semibold text-2xl tracking-wide text-black">
            GADGET STORE KE
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className=" md:flex flex-1 justify-center space-x-10 font-semibold font-sans">
          <a href="#home" className="hover:text-indigo-500">Store</a>
          <a href="#about" className="hover:text-indigo-500">Featured</a>
          <a href="#resources" className="hover:text-indigo-500">Accessories</a>
          <a href="#resources" className="hover:text-indigo-500">Experience</a>
          <a href="#resources" className="hover:text-cyan-500">Support</a>
        </nav>

        {/* Search, User, Cart */}
        <div className="flex items-center gap-6 ">
          <Search className="cursor-pointer hover:text-cyan-500" />
          <User className="cursor-pointer hover:text-cyan-500" />
          <button className="flex items-center gap-2 bg-amber-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
