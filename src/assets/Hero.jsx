import { Sparkles, ChevronDown, Clock, MapPin, Phone, Mail } from 'lucide-react';

function Hero() {
    return (
        <section id="store" className="relative min-h-screen flex items-center overflow-hidden pt-24">
            <div className="absolute inset-0 bg-gradient-to-br: from-blue-50 via-amber-50 to-blue-100"></div>

            <div className="relative z-10 w-full">
                <div className='max-w-7xl mx-auto px-4 py-32'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        
                        {/* Left side content */}
                        <div>
                            <div className='inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg text-black'>
                                <Sparkles className='w-4 h-4 text-amber-500' />
                                <span className='text-slate-700'>Premium Smartphones. Latest Technology.</span>
                            </div>

                            <h1 className='text-slate-900 text-3xl lg:text-3xl font-semibold tracking-tight mb-8 leading-tigh'>
                                Discover your perfect phone.
                            </h1>

                            <p className='text-slate-700 mb-10'>
                                Explore our curated collection of premium smartphones featuring cutting-edge technology,
                                stunning displays, and powerful performance. Whether you're a creative professional,
                                mobile gamer, or everyday user, we have the perfect device to elevate your digital lifestyle.
                            </p>

                            <p className='text-slate-600 mb-10'>
                                From flagship powerhouses with pro-grade cameras to sleek everyday essentials,
                                discover innovation that fits your style and budget.
                            </p>

                            {/* Store info */}
                            <div className='mb-10'>
                                <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg'>
                                    <h3 className='text-slate-900 mb-4'>Visit Our Store.</h3>

                                    <div className='space-y-4'>
                                        
                                        {/* Location */}
                                        <div className='flex items-start gap-3'>
                                            <div className='bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0:'>
                                                <MapPin className='w-5 h-5 text-blue-600' />
                                            </div>
                                            <div>
                                                <p className='text-slate-900'>Kimathi Chambers, 2nd Floor</p>
                                                <p className='text-slate-600'>Kimathi Street, Moi Avenue, Nairobi Kenya 00100</p>
                                            </div>
                                        </div>

                                        {/* Hours */}
                                        <div className='flex items-start gap-3'>
                                            <div className='bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0:'>
                                                <Clock className='w-5 h-5 text-amber-600' />
                                            </div>
                                            <div>
                                                <p className='text-slate-900'>Monday - Friday: 9:00 AM - 8:00 PM</p>
                                                <p className='text-slate-600'>Saturday: 9:00 AM - 12:00 PM</p>
                                            </div>
                                        </div>
                                        <div className='flex items-start gap-3'>
                                            <div className='bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0:'>
                                                <Phone className='w-5 h-5 text-purple-600' />
                                            </div>
                                            <div>
                                                <p className='text-slate-900'>0708-797-926 </p>
                                                <p className='text-slate-600'>Call us for expert advice</p>
                                            </div>
                                        </div>
                                        <div className='flex items-start gap-3'>
                                            <div className='bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0:'>
                                                <Mail className='w-5 h-5 text-green-600' />
                                            </div>
                                            <div>
                                                <p className='text-slate-900'>hello@gadgetstore.com</p>
                                                <p className='text-slate-600'>Get in touch with our team</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4 flex-wrap mb-8'>
                                <button className='bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5'>
                                    Shop Now
                                </button>
                                <button className='bg-white/90 backdrop-blur-sm text-slate-900 px-8 py-4 rounded-full hover:bg-white transition-all shadow-md'>
                                    View Collection
                                </button>
                                <button className='bg-white/90 backdrop-blur-sm text-slate-900 px-8 py-4 rounded-full hover:bg-white transition-all shadow-md'>
                                    Special Offers
                                </button>
                            </div>
                            <div className='animate-bounce lg:hidden'>
                                <ChevronDown className='w-8 h-8 text-slate-700 mx-auto' />
                            </div>
                        </div>
                        <div className='flex items-center justify-center lg;justify-end gap-10'>
                            <img 
                            src='/img/iphones-value-tradein-20240w9-1.png'
                            alt='Premium Smartphones Collection'
                            className='w-full h-auto min-h-screen object-contain drop-shadow-3xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
