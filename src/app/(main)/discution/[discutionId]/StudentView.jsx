import { getForumByIdService } from "@/services"
import { useEffect, useState } from "react"

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

export default function StudentView({ params }) {
    const [discution, setDiscution] = useState([])

    const discutionId = params.discutionId
    console.log(discutionId)

    useEffect(() => {
        getForumByIdService(discutionId)
            .then((response) => {
                setDiscution(response)
            })
    },[])

    return (
        <main>
            <section className="flex justify-between mb-3">
                <h1 className="font-bold text-5xl">
                    {discution?.title}
                </h1>
            </section>
            <div className="border-2 border-amethyst dark:border-grape"/>
        </main>
    )
}