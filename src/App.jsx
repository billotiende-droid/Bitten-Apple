import React from  'react';
import Header from './assets/Header.jsx';


function App() {

 return (
    // Main container for the entire app
    <div className="min-h-screen bg-gradient-to-br: from-blue-900 via-indigo-800 to-amber-700">
      <Header />
     
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
