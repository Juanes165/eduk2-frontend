import CourseContentCard from "@/components/Cards/CourseContentCard";
import { fetchCourseById } from "@/utils/services/data";

export default async function CourseDetail({ searchParams }){
    let id = searchParams.id;
    const course = await fetchCourseById(id);
    
    return(
        <main className="w-full md:max-w-[70%] p-5">
            <section className="flex justify-between mb-3">
                <h1 className="font-bold text-5xl">
                    {course.name.toUpperCase()}
                </h1>
                <p className="text-sm flex items-end justify-end">{course.teacher}</p>
            </section>
            <div className="border-2 border-amethyst dark:border-grape"/>
            <section className="mt-5 flex flex-col gap-4">
                {course.listContents.map((content, index) => {
                    return (
                        <CourseContentCard content={content} key={index}/>
                    )
                })}
            </section>
        </main>
    )
}