import { Sparkles, ChevronDown, Search, Filter, Grid, List} from 'lucide-react';

function Hero() {

    return (
        <section id="store" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br: from-blue-50 via-amber-50 to-blue-100"></div>

            <div className="relative z-10 w-full">
                <div className='max-w-7xl mx-auto px-4 py-32'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        {/*Left side content*/ }
                        <div>
                            <div className='inline-flex items-centre gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg'>
                              <Sparkles className='w-4 h-4 text-amber-500' />
                              <span className='text-slate-700'>Premium Smartphones. Latest Technology.</span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>

    );
}



export default Hero;
