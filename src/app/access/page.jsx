'use client';

import { useState } from "react";
import Link from "next/link";
import SignInForm from "@/components/Forms/Access/SignInForm";
import SignUpForm from "@/components/Forms/Access/SignUpForm";
import TermsConditions from "@/components/Modals/TermsConditions";
import { pressStart2P } from "@/utils/fonts/fonts";

export default function AccessPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showModalTerms, setShowModalTerms] = useState(false)

    const handleToggleTerms = () => {
        setShowModalTerms(!showModalTerms)
    }
    const handleToggle = () => setIsSignIn(!isSignIn);
    
    return (
        <main className="flex flex-col h-screen overflow-hidden relative">
            <div className="relative flex">
                <div className={`absolute top-0 left-0 w-full transition-all duration-500 ${isSignIn ? 'translate-x-0':'-translate-x-full lg:translate-x-0'}`}>
                    <div className="flex p-4 md:p-5 md:mx-8">
                        <Link href={'/'} className="flex gap-3 items-center">
                            <img src="https://via.placeholder.com/100" className="mb-1 h-10 w-10 md:h-12 md:w-12 rounded-full"></img>
                            <h1 className={`${pressStart2P.className} text-3xl md:text-4xl text-center font-bold`}>EDUK2</h1>
                        </Link>
                    </div>
                    <div className={`mx-12 my-[10vh] transition-all duration-500 ${isSignIn ? 'opacity-100 lg:w-1/2' : 'opacity-0 lg:w-1/2'}`}>
                        <SignInForm handleToggle={handleToggle}/>
                    </div>
                </div>
                <div className={`bg-gradient-to-br from-grape to-amethyst absolute dark:from-violet-dark dark:to-grape top-0 left-0 w-full h-screen transition-all duration-500 lg:inset-0 lg:transform lg:skew-x-12 ${isSignIn ? 'translate-x-full lg:translate-x-[60%]' : 'translate-x-0 lg:translate-x-[30%]'}`}>
                    <div className={`mx-12 my-[15vh] lg:mx-20 xl:mx-40 transition-all duration-500 lg:translate-x-[20%] lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:z-10 lg:-skew-x-12 ${isSignIn ? 'lg:opacity-0 lg:w-1/2' : 'opacity-100 lg:w-1/2'}`}>
                        <SignUpForm handleToggle={handleToggle} handleToggleTerms={handleToggleTerms}/>
                    </div>
                </div>
            </div>
            {showModalTerms && 
                <div className="z-20 md:p-20 2xl:p-40 md:rounded-2xl">
                    <TermsConditions closeModal={handleToggleTerms}/>
                </div>
            }
        </main>
    );
}