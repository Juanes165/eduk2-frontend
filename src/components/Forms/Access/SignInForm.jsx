import { useState } from 'react'; 
import { validateEmail } from '@/utils/validateFields';
import { ShowPassword } from '@/components/Buttons/ShowPassword';
import { useAuth } from '@/hooks/useAuth';
import { LoadingIcon } from '@/utils/icons/icons';

export default function SignInForm({ handleToggle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const { isLoading, signIn, signInWithGoogle } = useAuth();

    const handleTogglePassword = () => setShowPassword(!showPassword);    
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null);

        if(!email || !password) {
            setError("Por favor, completa todos los campos.")
            return
        }
        
        if(!validateEmail(email)) {
            setError("Por favor, ingresa un correo electrónico válido.")
            return
        }

        try {
            signIn(email, password)
        } catch (error) {
            setError("Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo.")
            console.log(error)
        }
    }

    const handleGoogleButton = (e) => {
        e.preventDefault()
        signInWithGoogle()
    }

    return (
        <div className="h-full items-center max-w-[500px] mx-auto">
            <h1 className="text-center font-bold text-4xl mb-10">Iniciar Sesión</h1>
            <form 
                onSubmit={handleSubmit} 
                className="flex flex-col items-center gap-3 w-full text-black"
            >
                <input 
                    type="text" 
                    value={email} 
                    onChange={handleEmail} 
                    placeholder="Correo electrónico" 
                    className="text-base sm:text-xl rounded-md p-2.5 w-full border border-black mb-2"
                />
                <div className='w-full relative mb-2'>
                    <input 
                        type={showPassword? "text" : "password"} 
                        value={password} 
                        onChange={handlePassword} 
                        placeholder="Contraseña" 
                        className="text-base sm:text-xl rounded-md p-2.5 w-full border border-black"
                    />
                    <ShowPassword 
                        visibility={showPassword} 
                        handleTogglePassword={handleTogglePassword}
                    />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button 
                    type="submit" 
                    className="relative flex justify-center items-center text-white text-base sm:text-xl bg-amethyst w-full p-2.5 rounded-md transition-all duration-400 hover:bg-grape dark:bg-grape dark:hover:bg-amethyst disabled:bg-amethyst/60"
                    disabled={isLoading}
                >
                    {isLoading &&
                        <LoadingIcon className="absolute -translate-x-20"></LoadingIcon>
                    }
                    Iniciar Sesión
                </button>

                {/* OR */}
                <div className="flex items-center justify-center w-full gap-4 ">
                    <hr className="w-full border border-main-dark/50 dark:border-main-light/50" />
                    <p className="text-base sm:text-xl text-main-dark/50 dark:text-main-light/50">O</p>
                    <hr className="w-full border border-main-dark/50 dark:border-main-light/50" />
                </div>

                <button 
                    type="button"
                    onClick={(e) => handleGoogleButton(e)}
                    className="text-base sm:text-xl border-2 dark:text-white border-amethyst w-full p-2.5 mb-8 rounded-md transition-all duration-400 hover:border-grape hover:bg-grape hover:text-white dark:border-grape"
                >
                    <div className="flex gap-3 justify-center">
                        <img src="google.svg" className="w-6 h-6"/>
                        Iniciar con Google
                    </div>
                </button>

                <p className='text-center w-full'>
                    ¿No tienes una cuenta?&nbsp;
                    <span
                        onClick={handleToggle} 
                        className="w-full rounded-md transition-all hover:cursor-pointer relative ease-in-out text-amethyst font-semibold
                        before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-amethyst before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:-bottom-1 before:left-[50%]
                        after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-amethyst after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-bottom-1 after:right-[50%]
                        "
                    >
                        Regístrate
                    </span>
                </p>
            </form>
        </div>
    )
}
