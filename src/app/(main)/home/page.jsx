import React from 'react';
import InfoCourseCard from "@/components/Cards/InfoCourseCard"
import { fetchCourses } from "@/utils/services/data"

export default async function Page() {
    const courses = await fetchCourses();
    console.log(courses);

    return (
        <div className='h-[93vh] overflow-y-scroll'>
            <div className="flex flex-wrap w-full justify-center items-center">
                {courses.map((course) => (
                    <InfoCourseCard course={course} key={course.id} />
                ))}
            </div>
        </div>
    );
}