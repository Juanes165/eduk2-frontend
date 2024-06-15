'use client';
import InfoCourseCard from "@/components/Cards/InfoCourseCard"
import { useAuth } from "@/hooks/useAuth";

export default function StudentView() {

    const { courses } = useAuth();

    return (
        <main className="flex h-full">
            <div className="flex flex-wrap w-full justify-center items-center gap-5 p-4">
                <section className="w-full mb-12 flex flex-wrap justify-center gap-4">
                    {courses?.map((course, index) => (
                        <InfoCourseCard key={index} course={course} />
                    ))}
                </section>
            </div>
        </main>
    );
}