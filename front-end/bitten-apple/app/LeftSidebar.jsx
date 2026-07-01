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
    
}