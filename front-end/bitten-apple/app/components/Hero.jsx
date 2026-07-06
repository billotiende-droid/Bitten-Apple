"use client";

import { useEffect } from "react";

import {
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const phoneImages = [
    {
      url: "https://images.unsplash.com/photo-1598665119100-2610d384b0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NjUzNTY3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Premium Collection"
    },
    {
      url: "https://images.unsplash.com/photo-1759505210684-7e9bbdecbd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaG9uZSUyMGRpc3BsYXl8ZW58MXx8fHwxNzY1MzU2NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Display"
    },
    {
      url: "https://images.unsplash.com/photo-1676173646307-d050e097d181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUyOTg2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Advanced Technology"
    },
    {
      url: "https://images.unsplash.com/photo-1606299420579-baacab12fede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1MzU2NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Elegant Design"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % phoneImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + phoneImages.length) % phoneImages.length
    );
  };

  useEffect(() => {
  // If the user hovers over the image, do not start the timer
  if (isHovered) return;

  const interval = setInterval(() => {
    nextSlide();
  }, 4000); // Changes image every 4 seconds

  return () => clearInterval(interval);
}, [currentSlide, isHovered]);

  return (
    <section id="store" className="relative w-full overflow-hidden py-6 md:py-12">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Panel: Exact Copy & Typography spacing from gadhethero1.png */}
          <div className="flex flex-col space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md text-black">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-slate-700 text-xs font-semibold uppercase tracking-wider">
                  Premium Smartphones. Latest Technology.
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-none">
              Discover your <br className="hidden lg:inline" /> perfect phone.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              Explore our curated collection of premium smartphones featuring
              cutting-edge technology, stunning displays, and powerful
              performance.
            </p>

            {/* Premium action button layouts mapped directly from gadhethero1.png */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-8 py-3.5 bg-[#0070e3] hover:bg-blue-600 text-white font-medium rounded-full shadow-sm hover:shadow transition duration-200">
                Shop Now
              </button>
              <button className="px-8 py-3.5 bg-[#1d1d1f] hover:bg-slate-800 text-white font-medium rounded-full shadow-sm hover:shadow transition duration-200">
                Compare Models
              </button>
            </div>
            
            <div className="animate-bounce md:hidden pt-4">
              <ChevronDown className="w-6 h-6 text-slate-700 mx-auto" />
            </div>
          </div>

          {/* Right Side Panel: Carousel Framework tailored with a clean rounded box shape */}
          <div className="relative flex items-center justify-center w-full">
            <div className="relative w-full max-w-xl">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div
                  className="flex transition transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {phoneImages.map((phone, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={phone.url}
                        alt={phone.title}
                        className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Elements */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all hover:scale-105"
                aria-label="Previous phone"
              >
                <ChevronLeft className="w-5 h-5 text-slate-900" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all hover:scale-105"
                aria-label="Next phone"
              >
                <ChevronRight className="w-5 h-5 text-slate-900" />
              </button>
              
              {/* Pagination indicators and label badge */}
              <div className="flex justify-between items-center mt-4 px-2">
                <div className="flex gap-1.5">
                  {phoneImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-slate-900 w-6"
                          : "bg-slate-300 hover:bg-slate-400 w-2"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <p className="text-xs font-medium text-slate-800 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm">
                  {phoneImages[currentSlide].title}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;