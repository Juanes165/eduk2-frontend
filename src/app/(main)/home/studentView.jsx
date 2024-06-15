'use client';

import { useState, useEffect } from "react";
import InfoCourseCard from "@/components/Cards/InfoCourseCard"
import { useAuth } from "@/hooks/useAuth";
import ForumContainer from "@/components/Common/ForumContainer";
import ForumCard from "@/components/Cards/ForumCard";
import { getForumsService } from "@/services"


export default function StudentView() {

    const [discutions, setDiscutions] = useState([])

    useEffect(() => {
        getForumsService()
            .then((response) => {
                setDiscutions(response)
            })
    },[])
    
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