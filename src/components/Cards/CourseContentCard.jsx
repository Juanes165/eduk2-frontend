import { VideoIcon  } from "@/utils/icons/icons";

export default function CourseContentCard({ content }) {
    const files = content.listFiles;

    return (
        <div className="w-full bg-main-light text-black rounded-md p-4">
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
                            <div className="rounded-md hover:bg-amethyst">
                                <a href={file} target="_blank">
                                    <VideoIcon />
                                </a> 
                            </div>
                            <div className="border border-white" />
                            <div className="flex items-center justify-center">
                                <h3 className="text-xl text-center">PLACEHOLDER</h3>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}