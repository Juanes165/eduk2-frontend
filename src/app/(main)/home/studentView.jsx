'use client';
import InfoCourseCard from "@/components/Cards/InfoCourseCard"
import { useAuth } from "@/hooks/useAuth";
import ForumContainer from "@/components/Common/ForumContainer";
import ForumCard from "@/components/Cards/ForumCard";

const discutions = [
    {
        "title": "¿Qué quiere decir esto?",
        "tagSubject": {
            "grade": "10-2",
            "name": "Quimica",
            "id": "fdkjdf99"
        },
        "date": "Feb 19 2024 10:20:04",
        "userName":"Juan Esteban Montaño", 
    },
    {
        "title": "¿Qué quiere decir esto?",
        "tagSubject": {
            "grade": "10-2",
            "name": "Quimica",
            "id": "fdkjdf99"
        },
        "date": "Feb 19 2024 10:20:04",
        "userName":"Juan Esteban Montaño", 
    },
    {
        "title": "¿Qué quiere decir esto?",
        "tagSubject": {
            "grade": "10-2",
            "name": "Quimica",
            "id": "fdkjdf99"
        },
        "date": "Feb 19 2024 10:20:04",
        "userName":"Juan Esteban Montaño", 
    },
    {
        "title": "¿Qué quiere decir esto?",
        "tagSubject": {
            "grade": "10-2",
            "name": "Quimica",
            "id": "fdkjdf99"
        },
        "date": "Feb 19 2024 10:20:04",
        "userName":"Juan Esteban Montaño", 
    },
    {
        "title": "¿Qué quiere decir esto?",
        "tagSubject": {
            "grade": "10-2",
            "name": "Quimica",
            "id": "fdkjdf99"
        },
        "date": "Feb 19 2024 10:20:04",
        "userName":"Juan Esteban Montaño", 
    }
]

export default function StudentView() {
    
    const { courses } = useAuth();

    return (
        <main className="flex h-full w-full">
            <div className="w-full h-full p-5 md:max-w-[65%]">
                <div className="flex flex-wrap w-full justify-center items-center gap-5 p-4">
                    {courses?.map((course, index) => (
                        <section key={index} className="w-full mb-12">
                            <div className="w-full flex flex-wrap gap-4">
                                <InfoCourseCard key={index} course={course} />
                            </div>
                        </section>
                    ))}
                </div>
            </div>
            <div className="h-full hidden md:block md:w-[30%] p-10 fixed right-0 top-11">
                <ForumContainer>
                    {discutions.map((forum, index) => (
                        <ForumCard key={index} forum={forum}/>
                    ))}
                </ForumContainer>
            </div>
        </main>
    );
}