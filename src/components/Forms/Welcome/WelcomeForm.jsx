const grados = {
    "10-1": "10-1",
    "10-2": "10-2",
    "10-3": "10-3",
    "11-1": "11-1",
    "11-2": "11-2",
    "11-3": "11-3",
}

export default function WelcomeForm() {
    return (
        <div className="w-full px-10 xl:px-80 2xl:px-[40rem]">
            <form className="flex flex-col rounded-md w-full gap-2">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="text-base md:text-2xl p-2 w-full border-gray-300 rounded-md bg-white text-black"
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    className="text-base md:text-2xl p-2 w-full border-gray-300 rounded-md bg-white text-black"
                />
                <select
                    size="1" 
                    defaultValue="Selecciona tu grado"
                    className="text-base text-black rounded-md md:text-2xl col-span-2 p-2 bg-white"
                >
                    <option value='DEFAULT'>Selecciona tu grado</option>
                    {Object.keys(grados).map((grado) => (
                        <option key={grado} value={grado}>{grados[grado]}</option>
                    ))} 
                </select>
                <button 
                    type="submit" 
                    className="col-span-2 text-white text-base md:text-2xl bg-amethyst w-full rounded-md p-2 transition-all duration-500 hover:bg-violet-dark"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}