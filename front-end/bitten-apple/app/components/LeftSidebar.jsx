'use client';

import  {ChevronRight, Smartphone, Watch, Zap, Shield, Headphones, Palette } from "lucide-react";
// import Link from "next/link";

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
        <aside className="hidden lg:flex w-72 flex-col gap-8 pr-2">
            <div className="sticky top-28 bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-6 shadow-sm shadow-blue-90/5 transition-all duration-300">
            <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-4">
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
            <div className="sticky top-[420px] bg-white/60 backdrop-blur-md border border-slate-200/40 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">
                Shop by Category
            </h3>
            <div className="space-y-2">
                {categories.map((category)=>{
                    const Icon = category.icon;
                    return (
                        <button 
                            key={category.name}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100/80 transition group"
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="w-4 h-4 text-slate-600 group-hover:text-slate-900"/>
                                <span className="text-sm text-slate-700 group-hover:text-slate-900">
                                    {category.name}
                                    </span> 
                                </div>
                                <div className="flex items-center gap-2">
                                    {category.badge && (
                                        <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-orange-400 to-red-500 text-white text-[10px] font-bold rounded-full">
                                           {category.badge} 
                                        </span>
                                    )}
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600"/>
                                    </div>
                        </button>
                    );
                })}
            </div>
            </div>
        </aside>
    )  
}
