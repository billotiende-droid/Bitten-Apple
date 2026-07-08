'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaInstagram, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const[formData, setFormData] = useState ({email: '', password: ''});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const res = await signIn('credentials', {
            redirect: false,
            email: formData.email,
            password: formData.password,
        });

        if (res?.error) {
            setError('Invalid credentials. Please try again.');
            setLoading(false);
        } else {
            router.push('/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex bg-slate-50 text-slate-900">
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-12 flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border-4 border-amber-500/10 pointer-events-none" />
            <div className='flex items-center gap-2 z-10'>
                <span className='text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600'>
                    GADGET STORE KE
                </span>
            </div>
            <div className='max-w-md z-10'>
                <h1 className='text-5xl font-extrabold tracking-tight leading-tight mb-4'>
                    Experience Seamless <br /> 
                    <span className='text-amber-400'>Gadget Shopping</span>
                </h1>
                <p className='text-slate-400 text-lg'>
                   Log in to manage your inventory, analyze metrics, and streamline your storefront operations.
                </p>
            </div>
            <p className='text-sm text-slate-500 z-10'>© 2026 Gadget Store. All rights reserved</p>
            </div>            
        </div>

    )
   




    }