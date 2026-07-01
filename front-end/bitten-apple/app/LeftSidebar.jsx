'use client';

import  {ChevronRight, Smartphone, Watch, Zap, Shield, Headphones, Palette } from "lucide-react";
import Link from "next/link";

export default function LeftSidebar() {
    const categories = [
    { name: 'iPhone Pro Series', icon: Smartphone, badge: 'Latest' },
    { name: 'Samsung Galaxy S', icon: Smartphone, badge: 'Hot' },
    { name: 'Wearables', icon: Watch, badge: null },
    { name: 'Performance', icon: Zap, badge: null },
    { name: 'Security', icon: Shield, badge: null },
    { name: 'Accessories', icon: Headphones, badge: null }
    ];

    const priceRanges = [
    {label: 'under $500', value: '500'},
    {label: '$500 - $1000', value: '1000' },
    { label: '$1000 - $1500', value: '1500' },
    { label: 'Above $1500', value: 'above' },   
    ];

    return (
        <aside className="hidden lg:flex w-72 flex-col ga[-8 pr-4">
            <div className="sticky top-28 bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-6 shadow-sm shadow-blue-90/5 transition-all duration-300">
            <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-amber-500"/>
                Shop by Design
            </h3>
            <div className="space-y-2">
                {[
            { label: 'Titanium Finishes', desc: 'Lightweight & rugged' },
            { label: 'Matte Glass Backs', desc: 'Fingerprint resistant' },
            { label: 'Ultra-Slim Profiles', desc: 'Sleek & ergonomic' },
            { label: 'Ceramic Shielding', desc: 'Maximum durability' }
            ].map((design)=> (
                <button 
                key={design.label}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition group"
                >
                    <div className="text-sm font-medium text-slate-800 group-hover:text-slate-900">
                        {design.label}
                    </div>
                    <div className="text-xs text-slate-500 group-hover:text-slate-600 mt-0.5">
                        {design.desc}
                    </div>
                </button>
            ))} 
            </div>
            </div>
        </aside>
    )  
}
