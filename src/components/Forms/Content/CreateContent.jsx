'use client';
import { useState } from 'react';
import DragAndDrop from '@/components/Common/DragAndDrop.jsx';
import { CancelIcon, FileIcon, ImageIcon, PdfIcon } from '@/utils/icons/icons';
import { createContentService } from '@/services';

export default function CreateContent({ courseId, setShowCreateContent }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [files, setFiles] = useState([]);

    const handleRemoveFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("subjectId", courseId);
        files.forEach((file) => {
            formData.append("file", file);
        });

        createContentService(formData)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    };


    return (
        <div className='px-6 py-4'>
            <h1 className="text-2xl font-semibold mb-4">
                Nueva publicación
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-base sm:text-xl rounded-md py-2 px-4 w-full outline-none
                    border-2 border-main-dark 
                    focus:border-amethyst  focus:ring-2 focus:ring-amethyst 
                    mb-8"
                />

                <textarea
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="text-base sm:text-xl rounded-md py-2 px-4 w-full outline-none
                                    border-2 border-main-dark 
                                    focus:border-amethyst focus:ring-2 focus:ring-amethyst
                                    h-[104px] mb-8"
                />

                {files.length > 0 && (
                    <div className="flex flex-row gap-5 w-full h-full mb-2">
                        {files.map((file, index) => (
                            <div className="flex flex-col justify-between items-center p-4 border rounded-lg h-40 w-40 relative" key={index}>
                                {returnIcon(file.type)}
                                <div className='w-32'>
                                    <p className='truncate'>{file.name}</p>
                                </div>
                                <div className="cursor-pointer absolute -top-4 -right-4 ">
                                    <CancelIcon className="h-8 w-8 text-red-500" onClick={() => handleRemoveFile(index)} >X</CancelIcon>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <DragAndDrop files={files} setFiles={setFiles} />
                <div className='flex justify-end mt-4 gap-4'>
                <button className='text-main-dark/50 hover:text-main-dark px-4' onClick={() => setShowCreateContent(false)}>
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="bg-amethyst text-main-light py-2 px-5 rounded-md text-lg font-semibold"
                >
                    Crear
                </button>
                </div>
            </form>
        </div>
    );
}

function returnIcon(fileType) {
    console.log(fileType);
    if (fileType.includes("image")) {
        return <ImageIcon className="w-24 h-24 text-blue-500" />
    } else if (fileType.includes("pdf")) {
        return <PdfIcon className="w-24 h-24 text-red-700" />
    } else {
        return <FileIcon className="w-24 h-24 text-amethyst" />
    }
}