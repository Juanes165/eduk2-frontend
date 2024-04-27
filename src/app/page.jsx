'use client';

import LandingInfoCard from "@/components/Cards/LandingInfoCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center sticky top-0 justify-between bg-white dark:bg-main-dark pt-4 pb-2 border-b-2 mx-4 border-amethyst dark:border-grape lg:border-b-4 xl:p-5 xl:mx-8">
        <div className="flex gap-2">
          <h1 className="text-4xl font-bold lg:text-6xl xl:text-5xl">EDUK2</h1>
          <img src="https://via.placeholder.com/40" className="rounded-full lg:w-16 xl:w-12" />
        </div>
        <Link href="#" className="bg-transparent border-amethyst dark:border-grape border-2 text-xl lg:text-3xl font-bold rounded-full hover:bg-amethyst dark:hover:bg-grape hover:text-white px-4 lg:px-8 lg:py-1 xl:text-2xl xl:px-10" >
          Ingresar
        </Link>
      </header>
      <main className="flex flex-col gap-4 min-h-screen w-full items-center my-2 lg:p-14 xl:p-24 2xl:px-20">
        <section className="flex flex-col top-0 mb-10 lg:flex-row 2xl:mx-60">
          <img src="https://via.placeholder.com/400" className=" mx-5 2xl:h-[550px] 2xl:w-[550px]"/>
          <div className="w-full flex justify-center flex-col 2xl:mx-32">
            <h2 className="text-4xl text-center font-bold p-4 lg:text-5xl">¿QUÉ ES EDUK2?</h2>
            <p className="text-xl p-5 text-center lg:text-2xl">
              Eduk2 es una plataforma de educación en línea que provee un entorno donde profundizar tus conocimientos y que te premia por estudiar.
            </p>
            <Link href="#" className="border-2 border-amethyst dark:border-grape text-xl lg:text-2xl font-bold rounded-full hover:bg-amethyst dark:hover:bg-grape hover:text-white text-center mx-16 my-6 py-1" >
              Ingresar
            </Link>
          </div>
        </section>
        <section className="flex flex-col w-full lg:my-16 xl:my-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-center p-4">
            ¿POR QUÉ EDUK2?
          </h2>
          <div className="w-full flex flex-col gap-2 my-2 px-6 lg:px-24 xl:gap-4 xl:my-10 2xl:flex-row">
            <LandingInfoCard title="INFORMACION" logo={'landing-book.svg'}>
              Todo el material de estudio que necesitas en un solo lugar, mejora tus conocimientos más allá del salón de clases.
            </LandingInfoCard>
            <LandingInfoCard title="ACCESIBILIDAD" logo={'landing-phone.svg'}>
              Accede a tus cursos en cualquier momento y lugar, desde tu computadora o dispositivo móvil, aprende a tu ritmo donde y cuando te sientas más comodo.
            </LandingInfoCard>
            <LandingInfoCard title="COMPITE" logo={'landing-medal.svg'}>
              Acumula puntos, gana medallas por tus logros, compite con tus compañeros y gana premios por tu esfuerzo y dedicación.
            </LandingInfoCard>
          </div>
        </section>
        <section className="flex flex-col 2xl:mx-52">
          <h2 className="text-4xl font-bold p-4 text-center lg:text-5xl xl:my-8">
            NUESTRA INSPIRACIÓN
          </h2>
          <div className="my-4 mx-5 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center 2xl:mx-32">
            <img src="https://via.placeholder.com/400" className="mb-2 2xl:h-[550px] 2xl:w-[550px]" />
            <p className="text-xl text-center lg:text-2xl p-4 2xl:mx-11">
              Francia Rocio Zemanate es una maestra con mas de 30 años de experiencia...
            </p>
          </div>
        </section>
      </main>
      <footer className="flex justify-center">
          <p className="font-mono lg:text-xl m-2">Aragangs.dev</p>
      </footer>
    </>
  );
}
