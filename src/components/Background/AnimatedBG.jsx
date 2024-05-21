export default function AnimatedBG() {
    return(
        <div className="z-10 flex h-full w-full justify-center relative">
            <div className="animate-bg-bottom-top">
                <div className="bg-amethyst h-36 w-36 md:h-52 md:w-52 rounded-xl opacity-40 absolute animate-spin-slow"/>
            </div>
            <div className="animate-bg-bottom-top translate-y-[130%] animation-delay-11000">
                <div className="bg-amethyst right-10 md:right-52 xl:right-96 2xl:right-[590px] h-52 w-52 md:h-80 md:w-80 2xl:h-96 2xl:w-96 rounded-xl opacity-40 absolute animate-spin-slow"/>
            </div>
            <div className="animate-bg-bottom-top translate-y-[130%] animation-delay-15000">
                <div className="bg-amethyst left-10 md:left-40 xl:left-80 2xl:left-96 h-80 w-80 md:h-96 md:w-96 2xl:h-[480px] 2xl:w-[480px] rounded-xl opacity-40 absolute animate-reverse-spin-slow"/>
            </div>
            <div className="animate-bg-bottom-top translate-y-[130%] animation-delay-32000">
                <div className="bg-amethyst right-5 md:right-14 xl:right-36 2xl:right-52 h-64 w-64 md:h-80 md:w-80 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80 rounded-xl opacity-40 absolute animate-reverse-spin-slow"/>
            </div>
            <div className="animate-bg-bottom-top translate-y-[130%] animation-delay-37000">
                <div className="bg-amethyst left-5 md:left-14 xl:left-36 2xl:left-52 h-48 w-48 md:h-64 md:w-64 2xl:h-72 2xl:w-72 rounded-xl opacity-40 absolute animate-spin-slow"/>
            </div>
        </div>
    )
}