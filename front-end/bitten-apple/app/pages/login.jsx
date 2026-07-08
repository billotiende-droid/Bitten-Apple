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
                <div className='flex justify-end'>
                    <button type='buttom' className='text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors'>
                        Forgot Password?
                    </button>
                </div>
                <button 
                   type='submit'
                   disabled={loading}
                   className='w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.99] transition-all disabled:opacity-50'
                >
                    {loading ? 'Signing In...': 'Sign In'}
                </button>
                </form>
                <div className='relative my-6 flex items-center justify-center'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-slate-200'></div>
                    </div>
                    <span className='relative bg-white px-4 text-sx uppercase text-slate-400 text-wider'>
                        Or Sign in with
                    </span>
                </div>
                <div className='flex justify-center gap-4 mb-6'>
                    <button
                       onClick={() => signIn('facebook')}
                       className='p-3 border border-slate-200 rounded-full hover:bg-slate-50 text-[#1877F2] transition-colors shadow-sm'>
                        <FaFacebook size={22} />
                       </button>
                       <button className='p-3 border border-slate-200 rounded-full hover:bg-slate-50 text-[#E1306C] transition-colors shadow-sm'>
                        <FaInstagram size={22} />
                       </button>
                </div>
                <div className='text-center space-y-3 text-sm'>
                    <p className='text-slate-500'>
                        Don't have an account?{''}
                        <button className='font-semibold text-amber-600 hover:text-amber-700 transition-colors'>
                            Sign Up
                        </button>
                    </p>
                    <p className='text-slate-400 text=xs'>OR</p>
                    <button
                      onClick={() => router.push('/')}
                      className='font-medium text-slate-600 hover:text-slate-900 transition-color'
                    >
                        Continue as a <span className='hover:underline'>guest</span>
                    </button>  
                </div>
            </div>
        </div>         
    </div>
     );
    }