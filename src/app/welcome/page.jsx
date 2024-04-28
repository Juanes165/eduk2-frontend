'use client'

import AnimatedBG from '../../components/Background/AnimatedBG';
import WelcomeForm from '@/components/Forms/Welcome/WelcomeForm';
import { pressStart2P, inter } from '@/utils/fonts/fonts';

export default function WelcomePage() {
    return (
        <main className="flex flex-col h-screen overflow-hidden bg-grape w-full relative">
            <div className="z-50 flex flex-col h-full w-full absolute items-center justify-center gap-3 md:gap-5 lg:gap-7 md:px-24 lg:px-20">
                <h1 className={`text-xl md:text-2xl lg:text-3xl p-2 text-center text-white ${pressStart2P.className}`}>¡HOLA, Y BIENVENIDO A EDUK2!</h1>
                <p className={`${inter.className} text-white px-2 md:text-2xl lg:text-3xl text-center`}>Antes de empezar, deberíamos completar tu perfil.</p>
                <WelcomeForm />
            </div>
            <AnimatedBG />
        </main>
    );
}