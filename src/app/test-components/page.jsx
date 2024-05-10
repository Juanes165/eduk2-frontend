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

export default function Page() {
    return (
        <div className="w-screen h-full p-5 gap-5 md:px-40 items-center justify-center flex flex-col">
            <h1 className="text-5xl font-bold">Test Page</h1>
            <div>
                <div className="w-full flex flex-col gap-5">
                    {courses.map((course) => (
                        <InfoCourseCard course={course} key={course.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}