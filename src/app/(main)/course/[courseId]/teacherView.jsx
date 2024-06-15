'use client';
import { useEffect, useState } from "react";
import CourseContentCard from "@/components/Cards/CourseContentCard";
import { getCourseByIdService } from "@/services";
import CreateContent from "@/components/Forms/Content/CreateContent";
import CourseViewSkeleton from "./CourseViewSkeleton";
import ForumContainer from "@/components/Common/ForumContainer";
import { getForumsService } from "@/services";

export default function StudentView({ params }) {

    const [course, setCourse] = useState(null);
    const [showCreateContent, setShowCreateContent] = useState(false);
    const [discutions, setDiscutions] = useState([]);

    useEffect(() => {
        getCourseByIdService(params.courseId).then(response => {
            setCourse(response);
        })
    }, []);

    const courseName = course?.name;
    const courseModName = courseName ? courseName[0].toUpperCase() + courseName.slice(1) : 'Curso';

    if (courseModName === 'Curso') return <CourseViewSkeleton />

    return (
        <main className="w-full md:max-w-[70%] p-5">
            <section className="flex justify-between mb-3">
                <h1 className="font-bold text-5xl">
                    {courseModName}
                </h1>
                <p className="text-sm flex items-end justify-end">{course?.teacher}</p>
            </section>
            <div className="border-2 border-amethyst dark:border-grape" />
            <section className="mt-5 flex flex-col gap-4">
                <div className="w-full bg-main-light text-black rounded-md shadow-md shadow-gray-400 dark:shadow-none">
                    {showCreateContent ? (
                        <CreateContent courseId={params.courseId} setShowCreateContent={setShowCreateContent} />
                    ) : (
                        <button type='button' onClick={() => setShowCreateContent(true)} className="w-full p-4" >
                            <span className="text-center text-xl italic text-main-dark/50">+ Añadir contenido</span>
                        </button>
                    )}

                </div>
            </section>
            <section className="mt-5 flex flex-col gap-4">
                {course?.listContents?.map((content, index) => {
                    return (
                        <CourseContentCard content={content} key={index} />
                    )
                })}
            </section>
        </main>
    )
}