'use client';
import { useState } from 'react';
import DragAndDrop from '@/components/Common/DragAndDrop.jsx';
import Header from '@/components/Nav/Header';

export default function Page() {

    const [files, setFiles] = useState([]);

    const handleRemoveFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };


    return (
        <>
        <Header />
        <div className="container p-6">
            <h1 className="text-2xl font-semibold">
                Nueva publicación
            </h1>
            <form>
                <input
                    type="text"
                    placeholder="Título"
                    className="text-base sm:text-xl rounded-md py-2 px-4 w-full outline-none
                    border-2 border-main-dark dark:border-main-light 
                    focus:border-amethyst dark:focus:border-grape focus:ring-2 focus:ring-amethyst dark:focus:ring-grape
                    mb-8"
                />

                <textarea
                    placeholder="Descripción"
                    className="text-base sm:text-xl rounded-md py-2 px-4 w-full outline-none
                    border-2 border-main-dark dark:border-main-light 
                    focus:border-amethyst dark:focus:border-grape focus:ring-2 focus:ring-amethyst dark:focus:ring-grape
                    h-[104px] mb-8"
                />


            </form>

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

            {/* {files.length > 0 && (
                <div className="flex items-center">
                    <div
                        style={{ color: "#6DC24B", marginRight: 1 }}
                    >EEE</div>
                    <p>{files.length} file(s) selected</p>
                </div>
            )} */}

            <DragAndDrop files={files} setFiles={setFiles} />
        </div>
        </>
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

export function PdfIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                <path d="M7 18v-2.5m0 0V14c0-.471 0-.707.154-.854C7.308 13 7.555 13 8.05 13h.7c.725 0 1.313.56 1.313 1.25S9.475 15.5 8.75 15.5zM21 13h-1.312c-.825 0-1.238 0-1.494.244s-.256.637-.256 1.423v.833m0 2.5v-2.5m0 0h2.187m-4.375 0c0 1.38-1.175 2.5-2.625 2.5c-.327 0-.49 0-.613-.067c-.291-.16-.262-.485-.262-.766v-3.334c0-.281-.03-.606.262-.766c.122-.067.286-.067.613-.067c1.45 0 2.625 1.12 2.625 2.5" />
                <path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10" />
                <path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2" />
            </g>
        </svg>
    )
}

export function ImageIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                <circle cx="7.5" cy="7.5" r="1.5" />
                <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                <path d="M5 21c4.372-5.225 9.274-12.116 16.498-7.458" />
            </g>
        </svg>
    )
}

export function FileIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                <path d="M16 17H9m7-4h-3m7.5 1c0 3.771 0 5.657-1.245 6.828S16.007 22 12 22h-.773c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805c-.848-1.066-.848-2.6-.848-5.67v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35c.268.676.268 1.523.268 3.216z" />
                <path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2" />
            </g>
        </svg>
    )
}

export function CancelIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path fill="currentColor" d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
        </svg>
    )
}