// {
//     "title": "¿Qué quiere decir esto?",
//     "tagSubject": {
//         "grade": "10-2",
//         "name": "Quimica",
//         "id": "fdkjdf99"
//     },
//     "date": "Feb 19 2024 10:20:04",
//     "userName":"Juan Esteban Montaño", 
// }

export default function ForumCard({ forum }) {
    return (
        <main className="w-full bg-white p-5 border-2 border-amethyst rounded-xl hover:scale-105 transition-all duration-200 hover:cursor-pointer">
            <div>
                <h1 className="text-lg font-bold">{forum?.title}</h1>
            </div>
            <p className="text-gray-500 dark:text-white text-sm italic">{forum?.userName}</p>
            <div>
                <p className="text-gray-500 dark:text-white text-sm">Grado: {forum?.tagSubject.grade}.</p>
                <p className="text-gray-500 dark:text-white text-sm">Curso: {forum?.tagSubject.name}</p>
            </div>
        </main>
    )
}