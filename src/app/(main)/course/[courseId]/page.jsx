'use client';

import CourseContentCard from "@/components/Cards/CourseContentCard";

let course = {
    "grade": "6-8",
    "name": "Physics",
    "teacher": "Francia Zemanate",
    "listStudents": [],
    "listContents": [
        {
            "idContenido": "iud8783jd",
            "title": "Introduction to Physics",
            "description": "This is the first chapter of the Physics book",
            "date": "2020-01-01",
            "listFiles": [
                "https://www.youtube.com/watch?v=MO83kjHOQ0A",
                "https://www.youtube.com/watch?v=mCdA4bJAGGk",
            ]
        }
    ]
}


export default function CourseDetail({ searchParams }){
    // let id = searchParams.id;
    
    return(
        <main className="w-full p-5">
            <section className="flex justify-between mb-3">
                <h1 className="font-bold text-5xl">
                    {course.name.toUpperCase()}
                </h1>
                <p className="text-sm flex items-end justify-end">{course.teacher}</p>
            </section>
            <div className="border-2 border-amethyst dark:border-grape"/>
            <section className="mt-5">
                {course.listContents.map((content, index) => {
                    return (
                        <CourseContentCard content={content} key={index}/>
                    )
                })}
            </section>
        </main>
    )
}