import react from  'react'


function App() {









 return (
    // Main container for the entire app
    <div className="bg-purple-400 min-h-screen">
      
      {/* Header section */}
      <header className="bg-white  p-8">
        <div className="flex justify-around ml-2 mr-3.5 items-centre max-w-6xl mx-auto">
          {/* App Title */}
          <h1 className="font-semibold text-xl text-blacktracking-wide">
            GADGET STORE KE
          </h1>

          {/* Navigation Links */}
          <nav className="space-x-8 text-shadow-lg flex">
            <a href="#home" className="hover:text-amber-300">Store</a>
            <a href="#about" className="hover:text-amber-300">Featured</a>
            <a href="#resources" className="hover:text-amber-300">Accessories</a>
             <a href="#resources" className="hover:text-amber-300">Experience</a>
              <a href="#resources" className="hover:text-amber-300">Support</a>
          </nav>

          {/* Get Started Button */}
          <button className="bg-amber-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition flex-end">
            Get Started
          </button>
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
