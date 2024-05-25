import { pressStart2P } from "@/utils/fonts/fonts"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth";
import DarkModeToggle from "@/components/Buttons/DarkModeToggle";

export default function Header({ toggleSidebar }) {

    const { signOut } = useAuth();

    const handleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
    }

    return (
        <header className="border-b-[1px] lg:sticky lg:top-0 border-main-dark/25 dark:border-main-light/25 h-16 py-2 px-4 flex flex-row justify-between bg-main-light dark:bg-main-dark">
            <div className="flex flex-row">
                {/* deploy sidebar button */}
                <button type="button" className="h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-violet-dark" onClick={toggleSidebar}>
                    {/* 3 bar icon */}
                    <svg width="30" height="30" viewBox="0 0 24 24" focusable="false" className="fill-main-dark/75 dark:fill-main-light">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </button>
                {/* logo */}
                <div className="flex">
                    <Link href={'/home'} className="flex flex-row items-center">
                        <img src="/logoLight.png" alt="Logo" className="mx-4 block dark:hidden w-12 h-12 rounded-full" />
                        <img src="/logoDark.png" alt="Logo" className="mx-4 hidden dark:block w-12 h-12 rounded-full" />
                        <h1 className={`text-3xl ${pressStart2P.className}`}>EDUK2</h1>
                    </Link>
                </div>
            </div>
            <nav className="mr-10 flex flex-row items-center w-fit">
                <span className="mr-3 text-xl hidden md:inline-block">Inicio</span>
                <span className="mr-3 text-xl hidden md:inline-block">Foro</span>
                <DarkModeToggle handleDarkMode={handleDarkMode} />
                <button type="button" className="flex flex-row items-center" onClick={signOut}>
                    <span className="mr-3 text-xl hidden md:inline-block">Salir</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                        <g fill="none" stroke="#FF0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"/>
                            <path d="M9 12h12l-3-3m0 6l3-3"/>
                        </g>
                    </svg>
                </button>
            </nav>
        </header>
    )
}