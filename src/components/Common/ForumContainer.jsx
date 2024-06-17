'use client';
import Link from "next/link"
import { useState, useEffect } from "react"
import { getForumsService } from "@/services"
import ForumCard from "@/components/Cards/ForumCard"

export default function ForumContainer() {

    const [discutions, setDiscutions] = useState([])

    useEffect(() => {
        getForumsService()
            .then((response) => {
                setDiscutions(response)
            })
    }, [])


    return (
        <main className="w-[300px] bg-gray-200  border-4 border-amethyst z-10 rounded-xl overflow-y-auto">
            <Link href={"/discution"}>
                <div className="bg-amethyst py-6 hover:cursos-pointer">
                    <h1 className="text-4xl font-bold text-center text-white">Discuciones</h1>
                </div>
            </Link>
            <div className="p-4 flex flex-col gap-3 md:h-[520px] 2xl:h-[700px] overflow-y-auto no-scrollbar">
                {discutions.map((forum, index) => (
                    <ForumCard key={index} forum={forum} />
                ))}
            </div>
        </main>
    )
}