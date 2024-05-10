import React from 'react';
import InfoCourseCard from "@/components/Cards/InfoCourseCard";

let courses = [
    {
        id: 1,
        name: "Course 1",
        image: "https://via.placeholder.com/400x200",
    },
    {
        id: 2,
        name: "Course 2",
        image: "https://via.placeholder.com/400x200",
    },
    {
        id: 3,
        name: "Course 3",
        image: "https://via.placeholder.com/400x200",
    },
    {
        id: 4,
        name: "Course 4",
        image: "https://via.placeholder.com/400x200",
    },
]

function Page() {
    return (
        <div className='h-screen overflow-y-scroll md:max-w-[calc(100%-250px)] p-6'>
            <div className="flex flex-col gap-5 md:flex-row justify-center items-center">
                {courses.map((course) => (
                    <InfoCourseCard course={course} key={course.id} />
                ))}
            </div>
        </div>
    );
}

export default Page;