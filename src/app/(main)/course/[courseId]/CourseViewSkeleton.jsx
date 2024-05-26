export default function CourseViewSkeleton () {
    return(
        <main className="w-full md:max-w-[70%] p-5">
            <div className="text-5xl rounded-lg text-platinum bg-platinum w-full mb-3">
                Curso
            </div>
            <div className="border-2 border-amethyst dark:border-grape mb-8"/>
            {/* <section className="mt-5 flex flex-col gap-4">
                {course?.listContents?.map((content, index) => {
                    return (
                        <CourseContentCard content={content} key={index}/>
                    )
                })}
            </section> */}
            <div className="text-5xl rounded-lg text-platinum bg-platinum w-full h-36 mb-4">
                Contenido
            </div>
            <div className="text-5xl rounded-lg text-platinum bg-platinum w-full h-36 mb-4">
                Contenido
            </div>
            <div className="text-5xl rounded-lg text-platinum bg-platinum w-full h-36 mb-4">
                Contenido
            </div>
        </main>
    )
}