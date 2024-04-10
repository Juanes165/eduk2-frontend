export default function SignUpForm ({ handleToggle }) {
    return (
        <div className="h-full w-full items-center">
            <h1 className="text-center text-5xl mb-10 font-bold text-white">
                Registrarse
            </h1>
            <form className="grid grid-cols-2 gap-2">
                <input type="text" placeholder="Nombres" className="text-base sm:text-xl col-span-2 border border-black sm:col-span-1 rounded-md p-2"/>
                <input type="text" placeholder="Apellidos" className="text-base sm:text-xl col-span-2 border border-black sm:col-span-1 rounded-md p-2"/>
                <input type="text" placeholder="Correo electrónico" className="text-base sm:text-xl border border-black col-span-2 rounded-md p-2"/>
                <input type="password" placeholder="Contraseña" className="text-base sm:text-xl border border-black col-span-2 rounded-md p-2"/>
                <input type="password" placeholder="Confirmar contraseña" className="text-base sm:text-xl border border-black col-span-2 rounded-md p-2"/>
                <button type="submit" className="col-span-2 text-white text-base sm:text-xl bg-amethyst w-full rounded-md p-2 transition-all duration-500 hover:bg-grape dark:bg-grape dark:hover:bg-amethyst">Registrarse</button>            
                <span className="col-span-2 mt-5 text-center text-xl text-white sm:text-3xl">¿Ya tienes una cuenta?</span>
                <button type="button" onClick={handleToggle} className="col-span-2 text-white text-base sm:text-xl bg-amethyst w-full rounded-md p-2 transition-all duration-500 hover:bg-grape dark:bg-grape dark:hover:bg-amethyst">Iniciar Sesión</button>
            </form>
        </div>
    )
}