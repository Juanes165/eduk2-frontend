'use client'

import { Press_Start_2P } from 'next/font/google';
import { AnimatedBG } from '../../components/Background/AnimatedBG';

export default function WelcomePage() {
    const animation = 'animate-spin-slow';
    return (
        <main className="flex flex-col h-screen overflow-hidden bg-grape w-full">
            <AnimatedBG />
        </main>
    );
}