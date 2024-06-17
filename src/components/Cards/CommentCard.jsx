import { DeleteIcon } from "@/utils/icons/icons"

export default function ComentCard({ coment, ownComent, handleDelete }) {
    return(
        <div className="bg-white rounded-3xl p-5 shadow-md shadow-gray-400 text-black relative">
            {ownComent && (
                <div className="absolute top-2 right-2">
                    <div 
                        className="flexitems-center rounded-full bg-red-500 p-2 hover:scale-105 transition-all duration-100 hover:cursor-pointer"
                        onClick={handleDelete}
                    >
                        <DeleteIcon className="w-6 h-6 text-white" />
                    </div>
                </div>
            
            )}
            <div className="flex gap-3 items-center">
                <div>
                    <img onError={(e) => e.target.src = '/images/avatar.svg'} src={coment.imageProfile} className="w-8 h-8 rounded-full bg-gray-500"/>
                </div>
                <div>
                    <h2 className="font-semibold">{coment.userName}</h2>
                </div>
            </div>
            <div className="bg-slate-400 w-full h-[2px] my-2" />
            <div>
                <p>{coment.comment}</p>
            </div> 
        </div>
    )
}