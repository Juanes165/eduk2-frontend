import Link from "next/link"

export default function ForumContainer({ children }) {
    return (
        <main className="md:w-[300px] 2xl:w-[400px] bg-gray-200  border-4 border-amethyst sticky z-10 rounded-xl overflow-y-auto">
            <Link href={"/discution"}>
                <div className="bg-amethyst py-6 hover:cursos-pointer">
                    <h1 className="text-4xl font-bold text-center text-white">Discuciones</h1>
                </div>
            </Link>
            <div className="p-4 flex flex-col gap-3 md:h-[520px] 2xl:h-[700px] overflow-y-auto no-scrollbar">
                {children}
            </div>
        </main>
    )
}