import React from  'react';
import Header from './assets/Header.jsx';
import Hero from './assets/Hero.jsx';
import PhoneShowcase from './assets/PhoneShowcase.jsx';
import FeatureGrid from './assets/FeatureGrid.jsx';
import Accessories from './assets/Accessories.jsx';
import Experience from './assets/Experience.jsx';

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
          <PhoneShowcase />
          <FeatureGrid />
          <Accessories />
          <Experience />
          <footer className='bg-white/60 backdrop-blur-sm mt-20 py-12'>
          <div className='max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
              <div>
                <h3 className='text-slate-900 mb-4'>Shop</h3>
                <ul className='space-y-2 text-slate-600'>
                  <li><a href='#'className='hover:text-slate-900'>Premium Series</a></li>
                  <li><a href='#'className='hover:text-slate-900'>Standard Series</a></li>
                  <li><a href='#'className='hover:text-slate-900'>Accessories</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-slate-900 mb-4'>Support</h3>
                <ul className='space-y-2 text-slate-600'>
                  <li><a href='#'className='hover:text-slate-900'>Contact Us</a></li>
                  <li><a href='#'className='hover:text-slate-900'>FAQS</a></li>
                  <li><a href='#'className='hover:text-slate-900'>Warranty</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-slate-900 mb-4'>Company</h3>
                <ul className='space-y-2 text-slate-600'>
                  <li><a href='#'className='hover:text-slate-900'>About</a></li>
                  <li><a href='#'className='hover:text-slate-900'>Blog</a></li>
                  <li><a href='#'className='hover:text-slate-900'>Reviews</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-slate-900 mb-4'>Connect</h3>
                <ul className='space-y-2 text-slate-600'>
                  <li><a href='#'className='hover:text-slate-900'>Instagram</a></li>
                  <li><a href='#'className='hover:text-slate-900'>X</a></li>
                  <li><a href='#'className='hover:text-slate-900'>Youtube</a></li>
                </ul>
              </div>
            </div>
            <div className='border-t border-slate-300 pt-8 text-center text-slate-600'>
              <p> &copy; 2025 GADGET STORE KE. Experience Innovation </p>
            </div>
          </div>
          </footer>
          {/* Add more sections here */}
        </main>
      </div>
    </div>
  );
}

export default App;