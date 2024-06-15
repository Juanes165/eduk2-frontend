import Link from "next/link"

export default function InfoDiscutionCard({ discution }) {
    return (
        <main className="items-center mb-5 bg-white rounded-xl shadow-sm shadow-gray-400 p-4 dark:text-black hover:scale-[1.01] transition-all duration-100">
            <div className="flex items-center justify-between">
                <div className="flex justify-center items-center bg-amethyst rounded-xl">
                    <div className="bg-white min-w-[57px] h-[50px] border-amethyst flex justify-center items-center border-2 p-2 rounded-l-xl">
                        <p className="font-bold">{discution.tagSubject.grade}</p>
                    </div>
                    <div className="text-xs text-white text-start flex p-2 font-semibold">
                        <p>{discution.tagSubject.name}</p>
                    </div>
                </div>
                <div className="ml-3 text-center">
                    <h1 className="font-bold text-lg">{discution.userName}</h1>
                    <p className="text-sm">{discution.date}</p>
                </div>
                <div>
                        
                </div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amethyst to-transparent my-5"/>
            <div className="mt-3">
                <h1 className="font-bold text-2xl">{discution.title}</h1>
            </div>
        </main>
    )
}