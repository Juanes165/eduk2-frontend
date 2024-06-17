import { useEffect, useState } from "react"
import { validateEmail, validateName, validatePassword, validatePasswordMatch } from "@/utils/validateFields"
import { ShowPassword } from "@/components/Buttons/ShowPassword"
import { useAuth } from "@/hooks/useAuth"
import { LoadingIcon } from "@/utils/icons/icons"

const initialUserData = {
    "name": "",
    "lastname": "",
    "email": "",
    "password": "",
    "confirmPassword": "",
    "grade": "",
    "photoUrl": "https://i.stack.imgur.com/l60Hf.png"
}

export default function SignUpForm({ handleToggle, handleToggleTerms }) {
    const [data, formatData] = useState(initialUserData)

    const [error, setError] = useState(null)

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [grades, setGrades] = useState([])

    const { isLoading, signUp } = useAuth()

    // FETCH GRADES FROM API
    useEffect(() => {
        /* TODO */
        setGrades(['10-1', '10-2', '10-3', '11-1', '11-2', '11-3'])
    }, [])

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const handleChange = (e) => {
        formatData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        if (!data.name || !data.lastname || !data.email || !data.password || !data.confirmPassword || !data.grade) {
            setError("Por favor, completa todos los campos.")
            return
        }

        if (!validateName(data.name)) {
            setError("Por favor, ingresa un nombre válido.")
            return
        }

        if (!validateName(data.lastname)) {
            setError("Por favor, ingresa un apellido válido.")
            return
        }

        if (!validateEmail(data.email)) {
            setError("Por favor, ingresa un correo electrónico válido.")
            return
        }

        if (!validatePassword(data.password)) {
            setError("La contraseña debe tener al menos 6 caracteres y al menos 1 número.")
            return
        }

        if (!validatePasswordMatch(data.password, data.confirmPassword)) {
            setError("Las contraseñas no coinciden.")
            return
        }

        const formatedData = {
            "name": data.name,
            "lastname": data.lastname,
            "email": data.email,
            "password": data.password,
            "grade": data.grade,
            "photoUrl": "https://example.com/photo.jpg"
        }
        try {
            signUp(formatedData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-full max-w-[500px] flex flex-col">
            <h1 className="text-center font-bold text-4xl mb-10 text-white">
                Registro
            </h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 text-black">
                <input
                    type="text"
                    placeholder="Nombres"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className="text-base sm:text-xl col-span-2 border border-black sm:col-span-1 rounded-md p-2"
                />
                <input
                    type="text"
                    placeholder="Apellidos"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    className="text-base sm:text-xl col-span-2 border border-black sm:col-span-1 rounded-md p-2"
                />
                <input
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="text-base sm:text-xl border border-black col-span-2 rounded-md p-2"
                />
                <div className="w-full col-span-2 relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        className="text-base sm:text-xl border border-black col-span-2 w-full rounded-md p-2"
                    />
                    <ShowPassword visibility={showPassword} handleTogglePassword={handleTogglePassword} />
                </div>
                <div className="w-full col-span-2 relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirmar contraseña"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        className="text-base sm:text-xl border border-black col-span-2 w-full rounded-md p-2"
                    />
                    <ShowPassword visibility={showConfirmPassword} handleTogglePassword={handleToggleConfirmPassword} />
                </div>
                <select
                    size="1"
                    defaultValue="Selecciona tu grado"
                    name="grade"
                    onChange={handleChange}
                    className="text-black sm:text-xl border border-black col-span-2 rounded-md p-2 focus:outline-none"
                >
                    <option value='DEFAULT'>Selecciona tu grado</option>
                    {grades.map((grade, index) => (
                        <option key={index} value={grade}>{grade}</option>
                    ))}
                </select>
                {error && <p className="col-span-2 text-red-500 text-sm text-center">{error}</p>}

                <div className="relative w-full col-span-2 my-2 flex items-center pl-8">
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        className="appearance-none w-5 h-5 shrink-0 border border-violet-dark rounded-sm bg-main-light
                            checked:bg-grape checked:border-0 peer
                            focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-wisteria"
                    />
                    <label className="text-md 2xl:text-2xl pl-2 2xl:pl-5 text-main-light">
                        Acepto los&nbsp;
                        <span
                            onClick={handleToggleTerms}
                            className="text-wisteria hover:text-violet-dark hover:cursor-pointer transition-all duration-300"
                        >
                            términos y condiciones
                        </span>
                    </label>
                    <svg
                        className="
                            absolute w-5 h-5
                            hidden peer-checked:block
                            pointer-events-none text-main-light"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <button
                    type="submit"
                    className="relative flex justify-center items-center col-span-2 text-white text-base sm:text-xl bg-grape w-full rounded-md p-2 transition-all duration-500 hover:bg-violet-dark disabled:bg-amethyst/50"
                    disabled={isLoading}
                >
                    {isLoading &&
                        <LoadingIcon className="absolute -translate-x-20"></LoadingIcon>
                    }
                    Registrarse
                </button>
            </form>
            <p className='text-center text-white w-full mt-8'>
                ¿Ya tienes una cuenta?&nbsp;
                <span
                    onClick={handleToggle}
                    className="w-full rounded-md transition-all hover:cursor-pointer relative ease-in-out text-wisteria
                        before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-wisteria before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:-bottom-1 before:left-[50%]
                        after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-wisteria after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-bottom-1 after:right-[50%]"
                >
                    Inicia sesión
                </span>
            </p>
        </div>
    )
}