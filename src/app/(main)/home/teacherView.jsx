'use client';
import EditableCourseCard from "@/components/Cards/EditableCourseCard"
import { CreateCourseIcon } from "@/utils/icons/icons";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default function TeacherView() {

    const { courses } = useAuth();

    if (!courses) return (
        <h1>Cargando</h1>
    )

    return (
        <main className="h-full w-full pr-5">
            <div className="w-full rounded-b-3xl bg-amethyst dark:bg-grape p-5 mb-4 relative overflow-hidden">
                <div className="h-16 w-16 rounded-full absolute bg-wisteria dark:bg-amethyst -right-5 -bottom-3" />
                <div className="h-12 w-12 rounded-full absolute bg-wisteria dark:bg-amethyst right-8 -bottom-7" />
                <div className="h-10 w-10 rounded-full absolute bg-wisteria dark:bg-amethyst -right-6 top-1" />
                <h1 className="text-5xl font-bold text-main-light z-10">
                    Tus cursos
                </h1>
            </div>
            {courses?.map((grade, index) => (
                <section key={index} className="w-full mb-12">
                    <h2 className="text-4xl font-bold text-main-dark dark:text-main-light">Curso: {grade?.grade}</h2>
                    <div className="border-2 border-amethyst dark:border-grape my-4" />
                    <div className="w-full flex flex-wrap gap-4">
                        {grade?.courses?.map((course, index) => (
                            <EditableCourseCard key={index} course={course} />
                        ))}
                    </div>
                </section>
            ))}
            <div className="mb-20 h-8" />
            <Link href={"/create/course"}>
                <div className="fixed right-5 bottom-5 shadow-md shadow-gray-500 bg-amethyst text-main-light rounded-full py-2 px-6 flex text-xl font-bold items-center gap-2 hover:bg-grape hover:cursor-pointer dark:bg-grape dark:shadow-none dark:hover:bg-amethyst z-50">
                    <CreateCourseIcon className="h-8 w-8" />
                    Crear
                </div>
            </Link>
        </main>
    )
}