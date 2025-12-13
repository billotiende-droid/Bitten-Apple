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
                        <ul className='space y-3 mb-8'>
                            <li className='flex items-center gap-3 text-slate-700'>
                                <span className='w-2 h-2 bg-blue-600 rounded-full'></span>
                                Multi-camera systems with ultra-wide capabilities
                            </li>
                            <li className='flex items-center gap-3 text-slate-700'>
                                <span className='w-2 h-2 bg-blue-600 rounded-full'></span>
                                Advanced Optical zoom and stabilization
                            </li>
                            <li className='flex items-center gap-3 text-slate-700'>
                                <span className='w-2 h-2 bg-blue-600 rounded-full'></span>
                                Night mode and potrait effects
                            </li>
                        </ul>
                        <button className='bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-colors'>
                            Learn More
                        </button>
                    </div>
                </div>
                {/* Second Row-content left,image right*/}
                <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
                    <div className='order-2 md:order-1'>
                        <div className='inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-4'>
                        <Cpu className='w-4 h-4 text-amber-600' />
                        <span className='text-slate-700'>Next-Gen Processing</span>
                        </div>
                        <h2 className='text-slate-900 mb-6'>
                            Power That Keeps Up
                        </h2>
                        <p className='text-slate-600-mb-6'>
                            Lightning-fast processors engineered for peak perfomance. Whether you're gaming,
                            multitasking, or creating content, experience seamless power and incredible efficiency
                            that lasts all day.
                        </p>
                        <ul className='space-y-3 mb-8'>
                            <li className='flex items-center gap-3 text-slate-700'>
                                <span className='w-2 h-2 bg-amber-600 rounded-full'></span>
                                Advanced chip architecture for superior speed
                            </li>
                            <li className='flex items-center gap-3 text-slate-700'>
                                <span className='w-2 h-2 bg-amber-600 rounded-full'></span>
                                Enhanced graphics for gaming and media
                            </li>
                            <li className='flex items-center gap-3 text-slate-700'>
                                <span className='w-2 h-2 bg-amber-600 rounded-full'></span>
                                AI-powered perfomance optimization
                            </li>
                        </ul>
                        <button className='bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-colors'>
                            See Perfomance
                        </button>
                    </div>
                    <div className='rounded-3xl overflow-hidden shadow-2xl- order-1 md:order-2'>
                        <img
                        src='/public/img/photo-1570965336147-c93dfee58c26.jpeg'
                        alt='iPhone Display'
                        className='w-full h-[500px] object-cover'
                        />
                    </div>
                </div>
                {/*Third row- full width image with overlay */}
                <div className='relative rounded-3xl overflow-hidden shadow-2xl h-[600px]'>
                    <img
                    src='/public/img/photo-1695578130333-bb2b208f34ab.jpeg'
                    alt='Lifestyle'
                    className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 p-12 text-white'>
                        <div className='max-w-2xl'>
                            <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4'>
                            <Zap className='w-4 h-4' />
                            <span>Premium Materials</span>
                            </div>
                            <h2 className='mb-4'>
                                Crafted to Perfection
                            </h2>
                            <p className='text-white/90 mb-6'>
                            Premium materials meet precision engineering, From aerospace-grade metals to
                            scratch-resistant glassm every device is built to withstand daily life while
                            maintaining its stunning appearance.
                            </p>
                            <button className='bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-white/90 transition-colors'>
                            Explore Design
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default PhoneShowcase;