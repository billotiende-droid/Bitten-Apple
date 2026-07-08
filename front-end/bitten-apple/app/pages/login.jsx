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
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:px-12'>
            <div className='"w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100'>
            <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold tracking-tight text-slate-900'>Sign In</h2>
                <p className='text-sm text-slare-500 mt-2'>Welcome back! Please enter your details.</p>
            </div>
            {error && (
            <div className='mb-4 p-3 text-sm bg-red-50 text-red-600 rounded-lg border border-red-200'>
                {error}
            </div>
            )}
            <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                    <label className='block text-sm font-medium text-slate-700'>Email</label>
                    <input
                        type='email'
                        required
                        placeholder='example@gmail.com'
                        className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                        />
                </div>

                <div>
                    <label className='block text-sm font-medium text-slate-700 mb-1'>Password</label>
                    <div className='relative'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            placeholder='.........'
                            className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all pr-12'
                            value={formData.password}
                            onChange={(e) =>setFormData ({...formData, password: e.target.value})}
                        />
                        <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors'
                        >
                            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18}/>}
                        </button>
                    </div>
                </div>
            </form>
            </div>
            </div>         
        </div>
    

    )


    }