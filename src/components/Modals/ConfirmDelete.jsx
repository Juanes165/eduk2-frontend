export default function ConfirmDelete({ handleDelete, handleCancel }) {
    return(
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 px-5">
            <div className="bg-white flex flex-col p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-center">¿Estás seguro de eliminar este curso?</h2>
                <div className="flex justify-center gap-4 mt-4">
                    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Eliminar</button>
                    <button onClick={handleCancel} className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400">Cancelar</button>
                </div>
            </div>
        </div>
    )
}