import { Battery, Shield, Wifi, Zap } from 'lucide-react';
import React from 'react';

function FeatureGrid () {
    const features = [
        {
      icon: Battery,
      title: 'All-Day Battery',
      description: 'Up to 29 hours video playback on Pro Max',
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'Ceramic Shield',
      description: 'Tougher than any smartphone glass',
      color: 'bg-blue-500'
    },
    {
      icon: Wifi,
      title: '5G Capable',
      description: 'Superfast downloads and streaming',
      color: 'bg-purple-500'
    },
    {
      icon: Zap,
      title: 'Fast Charging',
      description: 'Up to 50% charge in 30 minutes',
      color: 'bg-amber-500'
    }
    ];


    return (
        <section className='py-20'>
            <div className='max-7x1 mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-slate-900 mb-4'>
                        Built to last
                    </h2>
                    <p className='text-slate-600 max-w-2xl mx-auto'>
                        Every detail engineered to perfection. From the moment you pick it up to years of daily use.
                    </p>
                </div>
            </div>
        </section>
        

    )
}

export default FeatureGrid;