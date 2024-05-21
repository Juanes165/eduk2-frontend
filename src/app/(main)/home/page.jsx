import React from 'react';
import InfoCourseCard from "@/components/Cards/InfoCourseCard"
import { fetchCourses } from "@/utils/services/data"

export default async function Page() {
    const courses = await fetchCourses();

    return (
        <div className='overflow-y-scroll'>
            <div className="flex flex-wrap w-full justify-center items-center gap-5 p-4">
                {courses.map((course) => (
                    <InfoCourseCard course={course} key={course.id} />
                ))}
            </div>
        </div>
    );
}