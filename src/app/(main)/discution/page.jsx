'use client';

import InfoDiscutionCard from "@/components/Cards/InfoDiscutionCard"
import { getForumsService } from "@/services"
import { useState, useEffect } from "react"

const discuciones = [
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

export default function DiscutionPage() {
  const [discutions, setDiscutions] = useState([])

  useEffect(() => {
    getForumsService()
      .then((response) => {
        setDiscutions(response)
      })
  })

  return(
      <main className="w-full p-5 daark:text-black">
          <section className="flex justify-between mb-3">
              <h1 className="font-bold text-5xl">
                  Discuciones
              </h1>
          </section>
          <div className="border-2 border-amethyst dark:border-grape"/>
          <section className="my-2">
              {discutions.map((discution) => (
                  <InfoDiscutionCard key={discution?.forumId} discution={discution} discutionId={discution.forumId}/>
              ))}
          </section>
      </main>
  )
}