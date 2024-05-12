import { VideoIcon, ImageIcon, PdfIcon  } from "@/utils/icons/icons";

export default function CourseContentCard({ content }) {
    const files = content.listFiles;

    return (
        <div className="w-full bg-main-light text-black rounded-md p-4 shadow-md shadow-gray-400 dark:shadow-none">
            <section className="mb-4">
                <h1 className="text-2xl font-bold border-b-2 border-gray-400 mb-2">
                    {content.title}
                </h1>
                <p>
                    {content.description}
                </p>
            </section>
            <section className="flex flex-col gap-2">
                {files.map((file, index) => {
                    return (
                        <div key={index} className="flex bg-amethyst dark:bg-grape rounded-md text-white p-2 gap-3">
                            <div className="flex justify-center rounded-md hover:bg-wisteria dark:hover:bg-amethyst items-center">
                                <a href={file.url} target="_blank">
                                    {file.type === "video" && <VideoIcon />}
                                    {file.type === "jpg" && <ImageIcon />}
                                    {file.type === "pdf" && <PdfIcon />}
                                </a> 
                            </div>
                            <div className="border border-white" />
                            <div className="flex items-center justify-center">
                                <h3 className="text-xl text-center">{file.name}</h3>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}