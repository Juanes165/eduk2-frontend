'use client';

import { useState, useEffect } from "react";
import InfoCourseCard from "@/components/Cards/InfoCourseCard"
import { useAuth } from "@/hooks/useAuth";
import ForumContainer from "@/components/Common/ForumContainer";
import ForumCard from "@/components/Cards/ForumCard";
import { getForumsService } from "@/services"


export default function StudentView() {

    const { courses } = useAuth();

    return (
        <main className="w-full pr-5">
            <div className="w-full rounded-b-3xl bg-amethyst dark:bg-grape p-5 mb-4 relative overflow-hidden">
                <div className="h-16 w-16 rounded-full absolute bg-wisteria dark:bg-amethyst -right-5 -bottom-3" />
                <div className="h-12 w-12 rounded-full absolute bg-wisteria dark:bg-amethyst right-8 -bottom-7" />
                <div className="h-10 w-10 rounded-full absolute bg-wisteria dark:bg-amethyst -right-6 top-1" />
                <h1 className="text-4xl font-bold text-main-light z-10">
                    Tus cursos
                </h1>
            </div>
            <section className="mb-8 flex flex-wrap justify-center gap-4">
                {courses?.map((course, index) => (
                    <InfoCourseCard key={index} course={course} />
                ))}
            </section>
        </main>
    );
}