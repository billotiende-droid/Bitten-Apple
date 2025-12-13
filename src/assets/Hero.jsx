import { Sparkles, ChevronDown, Clock, MapPin, Phone, Mail, PhoneIncoming, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState} from 'react';

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const phoneImages = [

    {url: 'https://images.unsplash.com/photo-1598665119100-2610d384b0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NjUzNTY3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Premium Collection'
    },
    {
      url: 'https://images.unsplash.com/photo-1759505210684-7e9bbdecbd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaG9uZSUyMGRpc3BsYXl8ZW58MXx8fHwxNzY1MzU2NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Modern Display'
    },
    {
      url: 'https://images.unsplash.com/photo-1676173646307-d050e097d181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUyOTg2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Advanced Technology'
    },
    {
      url: 'https://images.unsplash.com/photo-1606299420579-baacab12fede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1MzU2NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Elegant Design'
    }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % phoneImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + phoneImages.length) % phoneImages.legnth);    
    }




    return (
        <section id="store" className="relative min-h-screen flex items-center overflow-hidden pt-20">
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
                                            <div className='bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'>
                                                <MapPin className='w-5 h-5 text-blue-600' />
                                            </div>
                                            <div>
                                                <p className='text-slate-900'>Kimathi Chambers, 2nd Floor</p>
                                                <p className='text-slate-600'>Kimathi Street, Moi Avenue, Nairobi Kenya 00100</p>
                                            </div>
                                        </div>

                                        {/* Hours */}
                                        <div className='flex items-start gap-3'>
                                            <div className='bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'>
                                                <Clock className='w-5 h-5 text-amber-600' />
                                            </div>
                                            <div>
                                                <p className='text-slate-900'>Monday - Friday: 9:00 AM - 8:00 PM</p>
                                                <p className='text-slate-600'>Saturday: 9:00 AM - 12:00 PM</p>
                                            </div>
                                        </div>
                                        <div className='flex items-start gap-3'>
                                            <div className='bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'>
                                                <Phone className='w-5 h-5 text-purple-600' />
                                            </div>
                                            <div>
                                                <p className='text-slate-900'>0708-797-926 </p>
                                                <p className='text-slate-600'>Call us for expert advice</p>
                                            </div>
                                        </div>
                                        <div className='flex items-start gap-3'>
                                            <div className='bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'>
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
                        {/* right side imaging */}
                        <div className='relative flex items-center justify-center lg:justify-end lg:ml-20'>
                            {/* Carousel container*/}
                            <div className='relative w-full max-w-xl'>
                                {/*image display */} 
                                <div className='relative overflow-hidden rounded-3xl'>
                                    <div 
                                      className='flex transition transform duration-500 ease-in-out'
                                      style={{ transform: `translateX(-${currentSlide * 100}%)`}}
                                      >
                                        {phoneImages.map((phone, index) => (
                                            <div key={index} className='w-full flex-shrink-0'>
                                                <img
                                                src={phone.url}
                                                alt={phone.title}
                                                className='w-full h-[550px] object-cover drop-shadow-2xl'
                                                 />  
                                        </div>           
                                        ))}
                                      </div>
                                </div>
                                <button
                                onClick={prevSlide}
                                className='absolute left-4 top-1/2 -translate-y-12 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110'
                                aria-label='Previous phone'
                                >
                                    <ChevronLeft className='w-6 h-6 text-slate-900' />
                                </button>
                                <button
                                onClick={nextSlide}
                                className='absolute right-4 top-1/2 -translate-y-12 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110'
                                aria-label='Next phone'
                                >
                                    <ChevronRight className='w-6 h-6 text-slate-900' />
                                </button>
                                <div className='flex justify-center gap-2 mt-6'>
                                    {phoneImages.map((_, index) =>(
                                        <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            currentSlide === index
                                            ? `bg-slate-900 w-8`
                                            : `bg-slate-400 hover:bg-slate-600`
                                        }`}
                                        aria-label={ `Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <div className='text-center mt-4'>
                                    <p className='text-slate-900 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 inline-block shadow-md'>
                                    {phoneImages[currentSlide].title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
