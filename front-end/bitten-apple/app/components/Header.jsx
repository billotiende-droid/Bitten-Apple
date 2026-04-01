'use client'
import { Apple, Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Apple className="w-7 h-7 text-black" />
          <h1 className="font-semibold text-lg tracking-wide text-black">
            GADGET STORE KE
          </h1>
        </div>
        {/* Mobile Menu */}
        <button
         className="md:hidden p-2 text-black"
         onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /> }
        </button>
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10 font-medium">
          <a href="#home" className="hover:text-black/60 transition">
            Store
          </a>
          <a href="#about" className="hover:text-black/60 transition">
            Featured
          </a>
          <a href="#accessories" className="hover:text-black/60 transition">
            Accessories
          </a>
          <a href="#experience" className="hover:text-black/60 transition">
            Experience
          </a>
          <a href="#support" className="hover:text-black/60 transition">
            Support
          </a>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Search className="cursor-pointer hover:text-black/60" />
          <User className="cursor-pointer hover:text-black/60" />
          <button className="flex items-center gap-2 bg-black text-white font-medium px-4 py-2 rounded-full hover:bg-black/80 transition">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu*/}
      <div>
        {isOpen && (
           <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl p-4 md:hidden shadow-lg">
            <nav className="flex flex-col space-y-4 font-medium">
              <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-black/60">Store</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-black/60">Featured</a>
              <a href="#accessories" onClick={() => setIsOpen(false)} className="hover:text-black/60">Accessories</a>
              <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-black/60">Experience</a>
              <a href="#support" onClick={() => setIsOpen(false)} className="hover:text-black/60">Support</a>
              <hr className="border-gray-100" />
              <div className="flex items-center gap-4 py-2">
                <Search className="w-5 h-5" />
                <User className="w-5 h-5" />
                <span className="text-sm">Account</span>
              </div>
            </nav>
            </div>
        )}
      </div>
    </header>
  );
}

export default Header;
