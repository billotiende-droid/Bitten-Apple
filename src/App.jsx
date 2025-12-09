import React from  'react';
import Header from './assets/Header.jsx';


function App() {

 return (
    // Main container for the entire app
    <div className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
    style={{ backgroundImage: "url('/img/blue-gold-wallpaper.jpg')" }}
    
    >
      <Header />
     
      {/* Main content area */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        
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
