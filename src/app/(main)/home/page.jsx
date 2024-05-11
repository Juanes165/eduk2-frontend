import React from 'react';
import InfoCourseCard from "@/components/Cards/InfoCourseCard";

let courses = [
    {
        id: 1,
        name: "REACT",
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
    {
        id: 5,
        name: "Course 5",
        image: "https://via.placeholder.com/400x200",
    }
]

function Page() {
    return (
        <div className='h-[93vh] overflow-y-scroll'>
            <div className="flex flex-wrap w-[200px] justify-center items-center">
                {courses.map((course) => (
                    <InfoCourseCard course={course} key={course.id} />
                ))}
            </div>
        </div>
    );
}

export default Page;