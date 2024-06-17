import Link from "next/link"

export default function ForumCard({ forum }) {
    return (
        <main className="w-full bg-white p-5 border-2 border-amethyst rounded-xl hover:scale-105 transition-all duration-200 hover:cursor-pointer dark:text-black">
            <Link href={`/discution/${forum.forumId}`}>
                <div>
                    <h1 className="text-lg font-bold">{forum?.title}</h1>
                </div>
                <p className="text-gray-500 text-sm italic">{forum?.userName}</p>
                <div>
                    <p className="text-gray-500 text-sm">Grado: {forum?.tagSubject.grade}.</p>
                    <p className="text-gray-500 text-sm">Curso: {forum?.tagSubject.name}</p>
                </div>
            </Link>
        </main>
    )
}