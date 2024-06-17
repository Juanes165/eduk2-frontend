import { getForumByIdService } from "@/services"
import { useEffect, useState } from "react"
import { GoBackIcon } from "@/utils/icons/icons"
import ComentCard from "@/components/Cards/CommentCard"
import { createCommentService } from "@/services"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import ConfirmDelete from "@/components/Modals/ConfirmDelete"

export default function StudentView({ params }) {
    const { user } = useAuth();

    const discutionId = params.discutionId

    const [discution, setDiscution] = useState([])
    const [confirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
    const [reload, setReload] = useState(1)
    const [comment, setComment] = useState({
        idForum: discutionId,
        comment: ''
    })

    useEffect(() => {
        getForumByIdService(discutionId)
            .then((response) => {
                setDiscution(response)
            })
    },[reload])

    const handleToggleModal = () => {
        setShowConfirmDeleteModal(!confirmDeleteModal)
    }

    const handleChange = (e) => {
        e.preventDefault();

        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        createCommentService(comment)
            .then((response) => setReload(reload + 1))
            .catch((error) => console.log(error))
    }

    return (
        <main className="p-5 text-black">
            <section className="flex items-center">
                <Link href={"/discution"} className="rounded-full bg-amethyst p-2 hover:scale-105 transition-all duration-100 mr-5">
                    <GoBackIcon className="w-6 h-6 text-white" />
                </Link>
                <div className="flex justify-between mb-3">
                    <h1 className="font-bold text-5xl dark:text-white">
                        {discution?.title}
                    </h1>
                </div>
            </section>
            <div className="border-2 border-amethyst dark:border-grape"/>
            <section className="bg-white rounded-3xl p-5 mt-5 shadow-gray-400 shadow-md dark:shadow-none">
                <div className="flex items-center gap-4">
                    <div>
                        <img src={discution?.photoUrl} className="rounded-full bg-red-500 w-12 h-12" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-2xl">
                            {discution?.userName}
                        </h2>  
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-lg">
                        {discution?.description}
                    </p>
                </div>
                <div className="w-full mt-4">
                    <p className="italic text-xs text-end">
                        {discution?.date}
                    </p>
                </div>
                {discution?.listfiles?.length > 0 && (
                    <section className="mt-2">
                        <div>
                            <div className="bg-slate-500 w-full h-[2px]"/>
                        </div>
                        <div className="mt-2">
                            <h2 className="font-semibold text-xl">
                                Archivos adjuntos
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {discution?.listfiles?.map((file, index) => (
                                <img src={file.url} key={index} className="md:max-w-[500px]"/>
                            ))}
                        </div>
                    </section>
                )}
            </section>
            <section className="mt-5 text-center md:px-40 2xl:px-96">
                <div>
                    <h2 className="text-3xl font-bold dark:text-white">Comentarios</h2>
                </div>
                <div className="bg-white shadow-gray-400 shadow-md p-5 rounded-xl mt-5">
                    <div>
                        <textarea
                            onChange={handleChange} 
                            name="comment"
                            className="text-black w-full p-2 placeholder:italic resize-none" 
                            placeholder="Escribe un comentario..."
                        />
                        <button onClick={handleSubmit} className="bg-amethyst text-white rounded-lg p-2 mt-2 w-full hover:bg-grape hover:scale-[1.02] transition-all duration-100">Comentar</button>
                    </div>
                </div>
                <div className="mt-5 flex flex-col gap-3 text-start">
                    {discution?.listComments?.map((coment, index) => (
                        <ComentCard coment={coment} key={index} handleDelete={handleToggleModal}/>
                    ))}
                </div>
                {confirmDeleteModal &&
                    <div className="z-20 md:p-20 2xl:p-40 md:rounded-2xl absolute justify-center items-center self-center flex ">
                        <ConfirmDelete handleCancel={handleToggleModal} deleteable="comentario" />
                    </div>
                }
            </section>
        </main>
    )
}