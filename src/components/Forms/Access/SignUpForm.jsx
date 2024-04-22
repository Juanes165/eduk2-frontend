import { useState } from "react"
import { fetchSignUp } from "@/utils/services/data"

export default function SignUpForm ({ handleToggle }) {
    const [data, formatData] = useState({ "name": "", "lastname": "", "email": "", "password": "", "grade": "", "photoUrl": "https://i.stack.imgur.com/l60Hf.png" })

    const handleChange = (e) => {
        formatData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formatedData = {
            "name": data.name + " " + data.lastname,
            "email": data.email,
            "password": data.password,
            "grade": data.grade
        }
        try {
            const response = await fetchSignUp(formatedData)
            console.log(formatedData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    const grados = {
        "10-1": "10-1",
        "10-2": "10-2",
        "10-3": "10-3",
        "11-1": "11-1",
        "11-2": "11-2",
        "11-3": "11-3",
    }

    return (
        <div className="h-full w-full items-center lg:px-12 xl:px-40 2xl:py-24">
            <h1 className="text-center text-5xl mb-10 font-bold text-white">
                Registrarse
            </h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 text-black">
                <input
                    required 
                    type="text" 
                    placeholder="Nombres"
                    name="name"
                    onChange={handleChange} 
                    className="text-base sm:text-xl col-span-2 border border-black sm:col-span-1 rounded-md p-2"
                />
                <input
                    required
                    type="text" 
                    placeholder="Apellidos"
                    name="lastname"
                    onChange={handleChange} 
                    className="text-base sm:text-xl col-span-2 border border-black sm:col-span-1 rounded-md p-2"
                />
                <input
                    required 
                    type="text" 
                    placeholder="Correo electrónico" 
                    name="email"
                    onChange={handleChange}
                    className="text-base sm:text-xl border border-black col-span-2 rounded-md p-2"
                />
                <input
                    required 
                    type="password" 
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleChange} 
                    className="text-base sm:text-xl border border-black col-span-2 rounded-md p-2"
                />
                <input
                    required
                    type="password" 
                    placeholder="Confirmar contraseña"
                    onChange={handleChange} 
                    className="text-base sm:text-xl border border-black col-span-2 rounded-md p-2"
                />
                <select
                    required 
                    size="1" 
                    defaultValue="Selecciona tu grado"
                    name="grade"
                    onChange={handleChange}
                    className="text-base text-black sm:text-xl border border-black col-span-2 rounded-md p-2"
                >
                    <option value='DEFAULT'>Selecciona tu grado</option>
                    {Object.keys(grados).map((grado) => (
                        <option key={grado} value={grado}>{grados[grado]}</option>
                    ))} 
                </select>
                <button 
                    type="submit" 
                    className="col-span-2 text-white text-base sm:text-xl bg-grape w-full rounded-md p-2 transition-all duration-500 hover:bg-violet-dark"
                >
                    Registrarse
                </button>            
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