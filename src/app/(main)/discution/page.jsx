'use client';

import InfoDiscutionCard from "@/components/Cards/InfoDiscutionCard"
import { getForumsService } from "@/services"
import { useState, useEffect } from "react"
import Link from "next/link";

export default function DiscutionPage() {
  const [discutions, setDiscutions] = useState([])

  useEffect(() => {
    getForumsService()
      .then((response) => {
        setDiscutions(response)
      })
  }, []);

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
                    <Link href={`/discution/${discution.forumId}`} key={discution.forumId} >
                        <InfoDiscutionCard discution={discution}/>
                    </Link>
              ))}
          </section>
      </main>
  )
}