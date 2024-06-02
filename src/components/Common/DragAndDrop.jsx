import { useEffect, useState } from "react";

export default function DragAndDrop({ files, setFiles }) {

    const [dragging, setDragging] = useState(false);

    // This functions handles the files uploaded input when the button is clicked
    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const newFiles = Array.from(selectedFiles);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    // This function handles the files dropped in the drag and drop area
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
        setDragging(false);
    };

    useEffect(() => {
        setFiles(files);
    }, [files, setFiles]);

    return (
        <section className="bg-amethyst/10 dark:bg-wisteria/20 rounded-lg">
            <div
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={() => setDragging(true)}
                onDragLeave={() => setDragging(false)}
                className={`flex flex-col items-center justify-center relative rounded-lg p-4
                border-4 border-dashed border-amethyst dark:border-grape transition-all duration-150
                ${dragging ? "bg-amethyst/20 dark:bg-wisteria/5" : "bg-transparent"}`}
            >
                <div>
                    <div className="upload-info flex flex-col items-center text-center mb-4">
                        <UploadIcon className={`w-28 h-28 text-amethyst ${dragging ? "animate-float" : ""}`} />
                        <p className="text-2xl mb-2 font-bold">Arrastra tus archivos aquí</p>
                        <p className="text-lg text-balance">
                            <span className="font-semibold">Formatos soportados: </span>.PDF, .PNG, .JPG, .JPEG
                        </p>
                    </div>
                    <input
                        type="file"
                        hidden
                        id="browse"
                        onChange={handleFileChange}
                        accept=".pdf, .png, .jpg, .jpeg, .doc, .docx, .txt, .pptx"
                        multiple
                    />
                    <label
                        htmlFor="browse"
                        className="flex items-center justify-center py-2 px-4 rounded-lg 
                                cursor-pointer text-lg font-semibold text-main-light
                                bg-amethyst hover:bg-grape
                                transition-all duration-200"
                    >
                        Seleccionar archivos
                    </label>
                </div>
            </div>
        </section>
    );
};


export function UploadIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8c-69 0-113.44 45.79-128 91.2c-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56" />
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m320 255.79l-64-64l-64 64m64 192.42V207.79" />
        </svg>
    )
}