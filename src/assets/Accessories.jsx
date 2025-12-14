import React from 'react';



function Accessories () {
    const accessories = [
        {
            name: 'MagSafe Charger',
            price: 39, 
            image:'https://applecenter.co.ke/wp-content/uploads/2021/01/Magsafe-Charger-0-1024x1024.jpeg'
        },
        {
            name: 'Silicon Case',
            price: 49,
            image:'https://i.pinimg.com/1200x/c1/de/56/c1de561d5a923ee6237e4d84ca981abc.jpg'
        },
        {
            name: 'AirPods Pro',
            price: 249,
            image:'https://i.pinimg.com/736x/36/bb/cd/36bbcdf88bbd6832638717628e4200e4.jpg'
        }

    ]

    return(
        <section id='accessories' className='py-20 bg-white/40 backdrop-blur-sm'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-slate-900 mb-4'>
                        Essential Accesories
                    </h2>
                    <p className='text-slate-600 max-w-2xl mx-auto'>
                        Complete your iPhone experience with our curated selection of premium accessories.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {accessories.map((accessory, index) =>
                    <div
                    key={index}
                    className='group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1'
                    >
                        <div className='aspect-square overflow-hidden'>
                            <img
                            src={accessory.image}
                            alt={accessory.name}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                            />
                        </div>
                        <div className='p-6'>
                            <h3 className='text-slate-900 mb-2'>{accessory.name}</h3>
                            <div className='flex items-center justify-between'>
                                <span className='text-slate700'>${accessory.price}</span>
                                <button className='bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors'>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Accessories