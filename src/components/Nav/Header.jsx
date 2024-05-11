import { pressStart2P } from "@/utils/fonts/fonts"
import Link from "next/link"

export default function Header({ toggleSidebar }) {
    return (
        <header className="border-b-[1px] lg:sticky lg:top-0 border-main-dark/25 dark:border-main-light/25 h-16 py-2 px-4 flex flex-row bg-main-light dark:bg-main-dark">
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
                    <img src="https://via.placeholder.com/200" alt="Logo" className="mx-4 w-12 h-12 rounded-full" />
                    <h1 className={`text-3xl ${pressStart2P.className}`}>EDUK2</h1>
                </Link>
            </div>
        </header>
    )
}