import { useEffect, useState } from "react"
import { validateEmail, validateName, validatePassword, validatePasswordMatch } from "@/utils/validateFields"
import { ShowPassword } from "@/components/Buttons/ShowPassword"
import { useAuth } from "@/hooks/useAuth"

const initialUserData = {
    "name": "Fuan",
    "lastname": "Chostoy",
    "email": "tranhp@gmail.com",
    "password": "p12345",
    "confirmPassword": "p12345",
    "grade": "10-2",
    "photoUrl": "https://i.stack.imgur.com/l60Hf.png"
}

export default function SignUpForm ({ handleToggle }) {
    const [data, formatData] = useState(initialUserData)
    const [error, setError] = useState(null)

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [grades, setGrades] = useState([])

    const { signUp } = useAuth()

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
        <div className="h-full w-full items-center lg:px-12 xl:px-40 2xl:py-24">
            <h1 className="text-center text-5xl mb-10 font-bold text-white">
                Registrarse
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
                        type={showPassword? "text" : "password" } 
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
                        type={showConfirmPassword ? "text" : "password" } 
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
                <button 
                    type="submit" 
                    className="col-span-2 text-white text-base sm:text-xl bg-grape w-full rounded-md p-2 transition-all duration-500 hover:bg-violet-dark"
                >
                    Registrarse
                </button>
                {error && <p className="col-span-2 text-red-500 text-sm text-center">{error}</p>}            
                <span className="col-span-2 my-2 text-center text-xl text-white sm:text-3xl">¿Ya tienes una cuenta?</span>
                <button 
                    type="button" 
                    onClick={handleToggle} 
                    className="col-span-2 text-white text-base sm:text-xl bg-grape w-full rounded-md p-2 transition-all duration-500 hover:bg-violet-dark"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    )
}