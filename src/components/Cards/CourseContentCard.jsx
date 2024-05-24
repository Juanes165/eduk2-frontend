import { VideoIcon, ImageIcon, PdfIcon  } from "@/utils/icons/icons";
import Link from "next/link";

export default function CourseContentCard({ content }) {
    const files = content.listFiles;
    
    var date = content.date;
    console.log(date)
    var splitDate = date.split(" ");
    var hour = splitDate[3];
    var day = splitDate.slice(0, 3).join(" ");
    console.log(day)

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
            <section className="flex flex-col gap-2 mb-4">
                {files.map((file, index) => {
                    return (
                        <Link href={file.url} key={index} target="_blank" className="flex w-full"> 
                            <div className="flex bg-amethyst dark:bg-grape rounded-md w-full text-white p-2 gap-3 hover:bg-wisteria dark:hover:bg-amethyst">
                                <div className="flex justify-center rounded-md items-center">
                                    {file.type === "video" && <VideoIcon />}
                                    {file.type === "img" && <ImageIcon />}
                                    {file.type === "pdf" && <PdfIcon />}
                                </div>
                            
                                <div className="border border-white" />
                                <div className="flex items-center justify-center">
                                    <h3 className="text-xl text-center">{file.name}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </section>
            <section className="flex justify-end">
                <p className="italic text-sm">
                    Creado en: {day} a las {hour}
                </p>
            </section>
        </div>
    )
}