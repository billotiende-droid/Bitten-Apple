import { Sparkles, ChevronDown, Search, Filter, Grid, List} from 'lucide-react';

function Hero() {

    return (
        <section id="store" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br: from-blue-50 via-amber-50 to-blue-100"></div>

            <div className="relative z-10 w-full">
                <div className='max-w-7xl mx-auto px-4 py-32'>
                    <div className='grid lg:grid-cols-2 gap-12 items-centre'>
                        {/*Left side content*/ }
                        <div>
                            <div className='inline-flex items-centre gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg text-black'>
                              <Sparkles className='w-4 h-4 text-amber-500' />
                              <span className='text-slate-700'>Premium Smartphones. Latest Technology.</span>
                            </div>
                            <h1 className='text-slate-900 mb-10'>
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

                        </div>

                    </div>

                </div>
            </div>
        </section>

    );
}



export default Hero;
