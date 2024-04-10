export default function FormTextField ({ props }) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={handleChange} 
            className="text-base sm:text-xl col-span-2 border border-black sm:col-span-1 rounded-md p-2"
        />
    )
}