import React from "react"
import GoogleIcon from "@/utils/GoogleIcon"

export default function SignInForm({ handleToggle }) {
    return (
        <div className="h-full w-full items-center">
            <h1 className="text-center text-5xl mb-10 font-bold">Iniciar Sesión</h1>
            <form className="flex flex-col items-center gap-2 w-full">
                <input type="text" placeholder="Correo electrónico" className="text-base sm:text-xl rounded-md p-2 w-full border border-black"/>
                <input type="password" placeholder="Contraseña" className="text-base sm:text-xl rounded-md p-2 w-full border border-black"/>
                <button type="submit" className="text-white text-base sm:text-xl bg-amethyst w-full p-2 rounded-md transition-all duration-400 hover:bg-grape dark:bg-grape dark:hover:bg-amethyst">Iniciar Sesión</button>
                <button type="button" className="text-base sm:text-xl border-2 border-amethyst w-full p-2 rounded-md transition-all duration-400 hover:border-grape hover:bg-grape hover:text-white dark:border-grape">
                    Iniciar con Google
                </button>
                <button type="button" onClick={handleToggle} className="text-white text-base sm:text-xl bg-amethyst w-full p-2 rounded-md transition-all duration-500 hover:bg-grape dark:bg-grape dark:hover:bg-amethyst">Registrarse</button>    
            </form>
        </div>
    )
}
