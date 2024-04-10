'use client';

import { useState } from "react";
import SignInForm from "@/components/Forms/Access/SignInForm";
import SignUpForm from "@/components/Forms/Access/SignUpForm";

export default function AccessPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const handleToggle = () => setIsSignIn(!isSignIn);
    
    return (
        <main className="flex flex-col h-screen overflow-hidden">
            <div className="relative flex">
                <div className={`absolute top-0 left-0 w-full transition-all duration-500 ${isSignIn ? 'translate-x-0':'-translate-x-full'}`}>
                    <div className="flex gap-4 m-5">
                        <h1 className="text-5xl text-center font-bold">EDUK2</h1>
                        <h2 className="text-3xl">LOGO</h2>
                    </div>
                    <div className="mx-12 my-44">
                        <SignInForm handleToggle={handleToggle}/>
                    </div>
                </div>
                <div className={`bg-gradient-to-br from-grape to-amethyst absolute top-0 left-0 w-full h-screen transition-all duration-500 ${isSignIn ? 'translate-x-full' : 'translate-x-0'}`}>
                    <div className="mx-12 my-44">
                        <SignUpForm handleToggle={handleToggle}/>
                    </div>
                </div>
            </div>
        </main>
    );
}