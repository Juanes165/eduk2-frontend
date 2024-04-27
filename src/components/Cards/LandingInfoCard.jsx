import { useState } from "react"

export default function LandingInfoCard({ logo, title, children }) {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => setIsActive(!isActive)

    return (
        <div className="bg-main-light text-black text-xl shadow-md w-full rounded-md hover:shadow-lg" onClick={handleClick}>
            <div className={`flex 2xl:flex-col 2xl:px-16 2xl:pt-16 items-center justify-start gap-5 px-5 pt-5 2xl:pb-0 ${isActive ? 'pb-0' : 'pb-5'}`}>
                <img src={logo} className="h-14 w-14 lg:h-16 lg:w-16" />
                <h2 className="text-3xl lg:text-4xl font-bold">
                    {title}
                </h2>
            </div>
            <div className="hidden p-4 text-center lg:text-2xl 2xl:flex 2xl:justify-center 2xl:items-center">
                <div className="border-t-2 border-main-dark/25 mb-2" />
                <div className="2xl:p-14">
                    {children}
                </div>
            </div>
            {isActive && (
                <div className="p-4 text-center lg:text-2xl 2xl:hidden">
                    <div className="border-t-2 border-main-dark/25 mb-2" />
                    {children}
                </div>
            )}
        </div>
    )
}