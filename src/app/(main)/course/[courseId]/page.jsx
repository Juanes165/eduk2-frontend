'use client';
import { useEffect, useState } from "react";
import CourseContentCard from "@/components/Cards/CourseContentCard";
import { getCourseByIdService } from "@/services";

export default function CourseDetailsPage({ params }){
 
    const [course, setCourse] = useState(null);

    useEffect(() => {
        getCourseByIdService(params.courseId).then(response => {
            setCourse(response);
        })
    }, []);

    return(
        <main className="p-5">
            <section className="flex justify-between mb-3">
                <h1 className="font-bold text-5xl">
                    {course?.name?.toUpperCase()}
                </h1>
                <p className="text-sm flex items-end justify-end">{course?.teacher}</p>
            </section>
            <div className="border-2 border-amethyst dark:border-grape"/>
            <section className="mt-5 flex flex-col gap-4">
                {course?.listContents?.map((content, index) => {
                    return (
                        <CourseContentCard content={content} key={index}/>
                    )
                })}
            </section>
        </main>
    )
}