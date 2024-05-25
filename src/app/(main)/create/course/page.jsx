'use client';

import { useEffect, useState } from "react";
import PreviewCard from "@/components/Cards/PreviewCard";
import { getImagesService, createCourseService } from "@/services";

let coursePreview = {
    name : "",
    teacher: "Francia Zemanate",
    grade: "",
    urlPhoto: "",        
}

export default function CreateCourse() {
    const [data, formatData] = useState(coursePreview);
    const [images, setImages] = useState([]);
    const [grades, setGrades] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCourseService(data);
    }

    // FETCH GRADES FROM API
    useEffect(() => {
        /* TODO */
        setGrades(['10-1', '10-2', '10-3', '11-1', '11-2', '11-3'])
    }, [])

    useEffect(() => {
        const fetchImages = async () => {
            const images = await getImagesService();
            setImages(images);
        }
        fetchImages();
    }, [])

    const handleChange = (e) => {
        formatData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return(
        <main className="w-full h-full p-5 md:max-w-[70%] md:px-10 2xl:px-20">
            <section>
                <h1 className="text-5xl font-bold mb-3">Crear curso</h1>
                <div className="border-2 border-amethyst dark:border-grape"/>
            </section>
            <section className="mt-5">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input 
                        type="text" 
                        placeholder="Nombre del curso"
                        name="name"
                        onChange={handleChange}
                        className="text-black sm:text-xl border border-black rounded-md p-2 focus:outline-none"
                    />
                    <select
                        name="grade"
                        onChange={handleChange}
                        className="text-black sm:text-xl border border-black rounded-md focus:font-sans p-2 focus:outline-none"
                    >
                        <option value="">Selecciona el grado</option>
                        {grades.map((grade, index) => (
                            <option key={index} value={grade}>{grade}</option>
                        ))} 
                    </select>
                    <select
                        name="urlPhoto"
                        onChange={handleChange}
                        className="text-black sm:text-xl border border-black rounded-md p-2 focus:outline-none"
                    >
                        <option value="">Selecciona una imagen</option>
                        {images.map((image, index) => (
                            <option key={index} value={image.url}>{index + 1}</option>
                        ))} 
                    </select>
                    <button 
                    type="submit"
                    className="col-span-2 text-white text-base font-semibold sm:text-xl bg-amethyst dark:bg-grape w-full rounded-md p-2 transition-all duration-500 hover:bg-violet-dark"
                >
                    Crear
                </button>
                </form>
            </section>
            <section className="mt-5">
                <h2 className="text-3xl font-bold mb-2">Vista previa:</h2>
                <div className="border-2 mb-4 border-amethyst dark:border-grape"/>
                <PreviewCard coursePreview={data}/>
            </section>
        </main>
    )
}