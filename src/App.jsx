import React from  'react';
import {Apple, Search, User, ShoppingCart} from 'lucide-react';


function App() {









 return (
    // Main container for the entire app
    <div className="bg-purple-400 min-h-screen">
      
      {/* Header section */}
      <header className="bg-gray-200 p-6">
        <div className="flex justify-between items-centre max-w-9xl mx-auto ">
          {/* App Title */}
          <div className="flex gap-1">
            <Apple className="w-8 h-8 text-black" />
            <h1 className="font-semibold text-2xl tracking-wide text-black ">
              GADGET STORE KE </h1>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10 mask-b-from-neutral-100 font-semibold">
            <a href="#home" className="hover:text-blue-300">Store</a>
            <a href="#about" className="hover:text-blue-300">Featured</a>
            <a href="#resources" className="hover:text-blue-300">Accessories</a>
             <a href="#resources" className="hover:text-blue-300">Experience</a>
              <a href="#resources" className="hover:text-blue-300">Support</a>
          </nav>

          {/* search User Cart Icons */}
          <div className="flex items-center gap-6" >
            <Search className="cursor-pointer hover:textamber-300" />
            <User className="cursor-pointer hover:text-amber-300" />

            <button className="flex items-center gap-2 bg-amber-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition ">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </button>
            

          </div>
          
        </div>
      </header>

      {/* Main content area */}
      <main className="flex flex-col md:flex-row gap-4 p-6">
        
        {/* Left section — Bot Collection display */}
        <div className="flex-1">
        
        </div>

        {/* Middle section — Battle interface */}
        <div>
          
        </div>

        {/* Right section — Bot management form */}
        <div className="w-full md:w-1/3">
        
        </div>

      </main>
    </div>
  );
}

export default App;
