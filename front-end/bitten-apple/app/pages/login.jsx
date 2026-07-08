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






    }