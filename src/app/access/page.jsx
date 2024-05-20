'use client';
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from 'next/navigation';
import SignInForm from "@/components/Forms/Access/SignInForm";
import SignUpForm from "@/components/Forms/Access/SignUpForm";

export default function AccessPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const handleToggle = () => setIsSignIn(!isSignIn);

    const { isLogged } = useAuth();

    if(isLogged) {
        return redirect('/home')
    }
    
    return (
        <main className="flex flex-col h-screen overflow-hidden">
            <div className="relative flex">
                <div className={`absolute top-0 left-0 w-full transition-all duration-500 ${isSignIn ? 'translate-x-0':'-translate-x-full lg:translate-x-0'}`}>
                    <div className="flex gap-4 m-5 items-center">
                        <h1 className="text-5xl text-center font-bold">EDUK2</h1>
                        <img src="https://via.placeholder.com/100" className="h-14 w-14 rounded-full"></img>
                    </div>
                    <div className={`mx-12 my-[20vh] transition-all duration-500 ${isSignIn ? 'opacity-100 lg:w-1/2' : 'opacity-0 lg:w-1/2'}`}>
                        <SignInForm handleToggle={handleToggle}/>
                    </div>
                </div>
                <div className={`bg-gradient-to-br from-grape to-amethyst absolute dark:from-violet-dark dark:to-grape top-0 left-0 w-full h-screen transition-all duration-500 lg:inset-0 lg:transform lg:skew-x-12 ${isSignIn ? 'translate-x-full lg:translate-x-[60%]' : 'translate-x-0 lg:translate-x-[30%]'}`}>
                    <div className={`mx-12 my-[15vh] lg:mx-20 xl:mx-40 transition-all duration-500 lg:translate-x-[20%] lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:z-10 lg:-skew-x-12 ${isSignIn ? 'lg:opacity-0 lg:w-1/2' : 'opacity-100 lg:w-1/2'}`}>
                        <SignUpForm handleToggle={handleToggle}/>
                    </div>
                </div>
            </div>
        </main>
    );
}