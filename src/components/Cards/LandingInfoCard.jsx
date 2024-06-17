import { useState } from "react"

export default function LandingInfoCard({ logo, title, children }) {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => setIsActive(!isActive)

    return (
        <div className="bg-main-light text-black text-xl shadow-md w-full rounded-md hover:shadow-lg" >
            <div className={`flex xl:flex-col items-center justify-start cursor-pointer xl:cursor-auto gap-5 p-5 2xl:p-8`} onClick={handleClick}>
                <img src={logo} className="h-14 w-14 lg:h-16 lg:w-16" />
                <h2 className="text-3xl lg:text-4xl font-[500] w-full text-center">
                    {title}
                </h2>
                <svg className={`mx-4 transition-all duration-200 ${isActive ? "-rotate-90" : "rotate-90"} fill-main-dark dark:fill-main-light xl:hidden`} width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z" />
                </svg>
            </div>

            <div className={`text-center text-xl ${isActive ? "opacity-100 visible max-h-96" : "opacity-0 invisible max-h-0"} xl:opacity-100 xl:visible xl:max-h-96 transition-all duration-[400ms]`}>
                <div className="border-t-2 border-main-dark/25 mx-4" />
                <div className="text-balance p-4 h-full">
                    {children}
                </div>
            </div>

        </div>
    )
}