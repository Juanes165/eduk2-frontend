'use client';
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from 'next/navigation';
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

    const handleAcceptTerms = () => {
        setShowModalTerms(false)
        document.getElementById('acceptTerms').checked = true;
    }

    const { isLogged } = useAuth();

    if (isLogged) {
        return redirect('/home')
    }

    return (
        <main className="flex flex-col items-center justify-center h-screen overflow-hidden relative">

            {/* EDUK2 Logo */}
            <div className="absolute top-0 left-0 flex justify-center lg:justify-start w-full">
                <Link href={'/'} className="flex gap-3 items-center py-2 mx-8">
                    <img src="logoLight.png" className="block dark:hidden w-12 h-12 rounded-full" />
                    <img src="logoDark.png" className="hidden dark:block w-12 h-12 rounded-full" />
                    <h1 className={`${pressStart2P.className} text-3xl text-center font-bold`}>EDUK2</h1>
                </Link>
            </div>

            {/* Sign in form */}
            <div className={`w-full transition-all duration-500 ${isSignIn ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className={`mx-12 transition-all duration-500 lg:w-1/2 ${isSignIn ? 'lg:opacity-100 lg:visible' : 'lg:opacity-0 lg:invisible'}`}>
                    <SignInForm handleToggle={handleToggle} />
                </div>
            </div>

            {/* Sign up form */}
            <div
                className={`absolute top-0 left-0 w-full h-screen
                        bg-gradient-to-br from-grape to-amethyst dark:from-violet-dark dark:to-grape
                        transition-all duration-500 lg:transform lg:skew-x-12
                        ${isSignIn ? 'translate-x-full lg:translate-x-[60%]' : 'translate-x-0 lg:translate-x-[35%]'}`}
            >
                <div
                    className={`mx-12 pr-8 h-full lg:w-1/2 flex items-center justify-center
                            transition-all duration-500 lg:translate-x-[20%] lg:-skew-x-12
                            ${isSignIn ? 'lg:opacity-0 lg:invisible' : 'lg:opacity-100 lg:visible'}`}
                >
                    <SignUpForm handleToggle={handleToggle} handleToggleTerms={handleToggleTerms} />
                </div>
            </div>

            {/* Terms and conditions */}
            <div className={`fixed inset-0 p-8 bg-main-dark/50 flex justify-center items-center z-20 transition-all duration-100 ${showModalTerms ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <TermsConditions showModal={showModalTerms} closeModal={handleToggleTerms} acceptTerms={handleAcceptTerms} />
            </div>
        </main>
    );
}