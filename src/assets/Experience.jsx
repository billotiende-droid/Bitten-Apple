import { Smartphone, MessageCircle, Headphones } from "lucide-react";
import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* IMAGE COLUMN */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
            <img
              src="/img/759059c2f97c677e179494068131682c.jpg"
              alt="Phone Experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent">
              <div className="absolute bottom-0 p-8 text-white">
                <h2 className="mb-4">Find Your Match</h2>
                <p className="text-white/90 mb-6">
                  Discover the device that perfectly fits your lifestyle.
                </p>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
                  Compare Models
                </button>
              </div>
            </div>
          </div>

          {/* SUPPORT CARDS COLUMN */}
          <div className="grid gap-8">

            {/* CARD 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-slate-900 mb-3">Trade In & Save</h3>
              <p className="text-slate-600 mb-4">
                Get credit toward your new device when you trade in.
              </p>
              <button className="text-blue-600 hover:text-blue-700">
                Get your estimate
              </button>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-slate-900 mb-3">Expert Support</h3>
              <p className="text-slate-600 mb-4">
                Get help choosing, setting up, or learning your device.
              </p>
              <button className="text-purple-600 hover:text-purple-700">
                Chat with us
              </button>
            </div>

          </div>
        </div>

        {/* NEWSLETTER — FULL WIDTH BOTTOM */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl">
          <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-white mb-4">Stay in the loop</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Be the first to know about new releases, exclusive offers and the latest from Gadget Store.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:border-white/40"
            />
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
