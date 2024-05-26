'use client';
import InfoCourseCard from "@/components/Cards/InfoCourseCard"
import { useAuth } from "@/hooks/useAuth";

export default function StudentView() {
    
    const { courses } = useAuth();

    return (
        <div className="flex flex-wrap w-full justify-center items-center gap-5 p-4">
            {courses?.map((course, index) => (
                <div key={index}>
                    <InfoCourseCard course={course} />
                </div>
            ))}
        </div>
    );
}