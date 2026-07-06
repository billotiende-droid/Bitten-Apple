"use client";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";


export default function RightSidebar() {
    const handleDirectionsClick = () => {
        window.open("https://www.google.com/maps/dir/?api=1&destination=Kimathi+Chambers,+2nd+Floor,+Kimathi+Street,+Moi+Avenue,+Nairobi+Kenya+00100", "_blank");
    };
    return (
        <aside className="hidden lg:flex w-72 flex-col gap-8 pl-2"> 
        <div className="sticky top-28 bg-white/85 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 shadow-xl shadow-blue-950/10">
        <div className="flex items-centre gap-2 mb-5">
            <div className="bg-blue-50 w-8 h-8 rounded-lg flex items-center justify-center border border-blue-100">
                <MapPin className="w-4 h-4 text-blue-600"/>
            </div>
            <h3 className="text-sm font-bold tracking-widest text-slate-900 uppercase">
                Our Flagship Store
            </h3>
        </div>
        <div className="space-y-4">
            <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0"/>
                <div>
                    <p className="text-sm font-semibold text-slate-900">Kimathi Chambers</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        2nd Floor, Kimathi Street & Moi Avenue,<br /> 
                        Nairobi Kenya 00100
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="text-sm font-semibold text-slate-900">Store Hours</p>
                    <p className="text-xs text-slate-600">Mon - Fri: 9:00 AM - 8:00 PM</p>
                     <p className="text-xs text-slate-600">Saturday: 9:00 AM - 12:00 PM</p>
                </div>
            </div>
            </div>
            <div className="flex items-start gap-4 mt-6">
                <Phone className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <a
                        href="tel:+254708797926"
                        className="text-xs text-blue-600 hover:underline transition"
                    > 
                        +254 708-797-926
                    </a>
                </div>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-200/60">
            <button
                onClick={handleDirectionsClick}
                className="w-full bg-slate-900 text-white text=sm font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 shadow-md transition-group"
            >
                <Navigation className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                Get Directions
            </button>
            </div>
            </div>
            </aside>
    );


}