import Link from "next/link"

const discution = [
    {
        "forumId": "y6rVy50B0791uOF2imb1",
        "title": "¿Qué quiere decir esto?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget metus eu augue tempor efficitur.",
        "listfiles": [
          {
            "name": "ExposiciÃ³n EsIA.pdf",
            "type": "pdf",
            "url": "http://res.cloudinary.com/dkpaodcue/image/upload/v1717370805/zl8mtakrmvnyvha6utb7.pdf"
          }
        ],
        "date": "Feb 19 2024 10:20:04",
        "tagSubject": {
          "grade": "10-2",
          "name": "Quimica",
          "id": "fdkjdf99"
        },
        "userName": "Juan Esteban Montaño",
        "userId": "8i3iis9iakjfx",
        "photoUrl": "https://image.jpg"
    },
]

export default function InfoDiscutionCard({ discution, discutionId }) {
    return (
        <main className="items-center mb-5 bg-white rounded-xl shadow-sm shadow-gray-400 p-4 dark:text-black">
            <Link href={`/discution/${discutionId}}`}>
                <div className="flex items-center justify-between">
                    <img src={discution.photoUrl} alt="user" className="w-12 h-12 rounded-full"/>
                    <div className="ml-3">
                        <h1 className="font-bold text-lg">{discution.userName}</h1>
                        <p className="text-sm">{discution.date}</p>
                    </div>
                    <div className="text-xs text-white bg-amethyst rounded-xl p-2">
                        <p>{discution.tagSubject.name}</p>
                        <p>{discution.tagSubject.grade}</p>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amethyst to-transparent my-5"/>
                <div className="mt-3">
                    <h1 className="font-bold text-2xl">{discution.title}</h1>
                </div>
            </Link>
        </main>
    )
}