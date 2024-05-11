import InfoCourseCard from "@/components/Cards/InfoCourseCard";
import CourseContentCard from "@/components/Cards/CourseContentCard";

// let courses = [
//     {
//         id: 1,
//         name: "Course 1",
//         image: "https://via.placeholder.com/400x200",
//     },
//     {
//         id: 2,
//         name: "Course 2",
//         image: "https://via.placeholder.com/400x200",
//     },
//     {
//         id: 3,
//         name: "Course 3",
//         image: "https://via.placeholder.com/400x200",
//     },
//     {
//         id: 4,
//         name: "Course 4",
//         image: "https://via.placeholder.com/400x200",
//     },
// ]

let content = {
    "idContenido": "iud8783jd",
    "title": "Introduction to Physics",
    "description": "This is the first chapter of the Physics book",
    "date": "2020-01-01",
    "listFiles": [
        "https://www.youtube.com/watch?v=MO83kjHOQ0A",
    ]
}

export default function Page() {
    return (
        <div className="w-screen h-full p-5 gap-5 md:px-40 items-center justify-center flex flex-col">
            <h1 className="text-5xl font-bold">Test Page</h1>
            <div>
                <CourseContentCard content={content} />
            </div>
        </div>
    );
}