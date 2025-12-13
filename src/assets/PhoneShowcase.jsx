import { Zap, Camera, Cpu } from 'lucide-react';
import React from 'react';


function PhoneShowcase () {
    return (
        <section id="featured" className="py-20">
            <div className='max-w-7xl mx-auto px-4'>
                {/* First Row -Image left, Content Right */}
                <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
                    <div className='rounded-3xl overflow-hidden shadow-2xl'>
                        <img
                        src='/public/img/photo-1758348844306-5a0ba556db03.jpeg'
                        alt='iphone Camera System'
                        className='w-full h-[500px] object-cover'
                        />
                    </div>
                    <div>
                        <div className='inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-4'>
                        <Camera className='w-4 h-4 text-blue-600' />
                        <span className='text-slate-700'>Professional Camera System</span>
                        </div>
                        <h2 className='text-slate-900 mb-6'>
                            Photography Reimagined
                        </h2>
                        <p className='text-slate-600 mb-6'>
                            Advanced multi-lens camera systems that capture stunning photos and videos in any lighting condition.
                            With cutting-edge computational photography and professional-grade features.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PhoneShowcase;