'use client';
import InfoCourseCard from "@/components/Cards/InfoCourseCard"
import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
    
    const { courses } = useAuth();

    return (
        <div className="flex flex-wrap w-full justify-center items-center gap-5 p-4">
            {courses?.map((course) => (
                <InfoCourseCard course={course} key={course.id} />
            ))}
        </div>
    );
}