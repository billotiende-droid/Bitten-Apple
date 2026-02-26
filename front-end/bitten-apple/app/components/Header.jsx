import { Apple, Search, User, ShoppingCart } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Apple className="w-7 h-7 text-black" />
          <h1 className="font-semibold text-lg tracking-wide text-black">
            GADGET STORE KE
          </h1>
        </div>

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

        <div className="flex items-center gap-6">
          <Search className="cursor-pointer hover:text-black/60" />
          <User className="cursor-pointer hover:text-black/60" />
          <button className="flex items-center gap-2 bg-black text-white font-medium px-4 py-2 rounded-full hover:bg-black/80 transition">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
