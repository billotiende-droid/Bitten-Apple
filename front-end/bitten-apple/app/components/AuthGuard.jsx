"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession} from "next-auth/react";


export default function AuthGuard({ children, requiredRole }) {
    const { data: session, status} = useSession();
    const router = useRouter();
    const role = session?.user?.role || '';

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
            return;
        }

        if (status === 'authenticated' && requiredRole && role !== requiredRole) {
            if (role === 'admin') {
                router.push('/dashboard/admin');
            } else {
                router.push('/dashboard/customer');
            }
        }

    
    })
}