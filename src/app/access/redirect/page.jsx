'use client';
import { useCookies } from "next-client-cookies";
import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function RedirectPage() {

    const cookies = useCookies();
    const { isLogged } = useAuth();

    if( isLogged ) {
        return redirect('/home')
    }
    else {
        cookies.remove('token');
        return redirect('/access')
    }
}