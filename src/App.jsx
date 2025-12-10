import React from  'react';
import Header from './assets/Header.jsx';
import Hero from './assets/Hero.jsx';

function App() {
  return (
    // Main container with background image
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/img/blue-gold-wallpaper.jpg')" }}
    >
      {/* Overlay for glassy/frosted effect */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>

      {/* Content above overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        {/* Main content area */}
        <main className="max-w-6xl mx-auto px-4 py-10">
          <Hero />
          {/* Add more sections here */}
        </main>
      </div>
    </div>
  );
}

export default App;