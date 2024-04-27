import { useState } from 'react';
import { fetchLogin } from '@/utils/services/data';   
import { linkGoogle } from '@/utils/services/firebase';
import { validateEmail } from '@/utils/validateFields';
import { ShowPassword } from '@/components/Buttons/ShowPassword';

export default function SignInForm({ handleToggle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => setShowPassword(!showPassword);    
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null);

        const data = {
            email,
            password
        }

        if(!email || !password) {
            setError("Por favor, completa todos los campos.")
            return
        }
        
        if(!validateEmail(email)) {
            setError("Por favor, ingresa un correo electrónico válido.")
            return
        }

        try {
            const response = await fetchLogin(data)
            console.log(response)
            if(!response.ok) {
                setError("Correo electrónico o contraseña incorrectos.")
                return
            }
        } catch (error) {
            setError("Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo.")
        }
    }

    return (
        <div className="h-full w-full items-center lg:px-24 xl:px-40 2xl:py-24">
            <h1 className="text-center text-5xl mb-10 font-bold">Iniciar Sesión</h1>
            <form 
                onSubmit={handleSubmit} 
                className="flex flex-col items-center gap-3 w-full text-black"
            >
                <input 
                    type="text" 
                    value={email} 
                    onChange={handleEmail} 
                    placeholder="Correo electrónico" 
                    className="text-base sm:text-xl rounded-md p-2 w-full border border-black"
                />
                <div className='w-full relative'>
                    <input 
                        type={showPassword? "text" : "password"} 
                        value={password} 
                        onChange={handlePassword} 
                        placeholder="Contraseña" 
                        className="text-base sm:text-xl rounded-md p-2 w-full border border-black"
                    />
                    <ShowPassword 
                        visibility={showPassword} 
                        handleTogglePassword={handleTogglePassword}
                    />
                </div>
                <button 
                    type="submit" 
                    className="text-white text-base sm:text-xl bg-amethyst w-full p-2 rounded-md transition-all duration-400 hover:bg-grape dark:bg-grape dark:hover:bg-amethyst"
                >
                    Iniciar Sesión
                </button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button 
                    type="button"
                    onClick={linkGoogle}
                    className="text-base sm:text-xl border-2 dark:text-white border-amethyst w-full p-2 rounded-md transition-all duration-400 hover:border-grape hover:bg-grape hover:text-white dark:border-grape"
                >
                    <div className="flex gap-3 justify-center">
                        <img src="google.svg" className="w-6 h-6"/>
                        Iniciar con Google
                    </div>
                </button>
                <button 
                    type="button" 
                    onClick={handleToggle} 
                    className="text-white text-base sm:text-xl bg-amethyst w-full p-2 rounded-md transition-all duration-500 hover:bg-grape dark:bg-grape dark:hover:bg-amethyst"
                >
                    Registrarse
                </button>    
            </form>
        </div>
    )
}
