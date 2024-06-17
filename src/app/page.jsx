'use client';

import LandingInfoCard from "@/components/Cards/LandingInfoCard";
import Link from "next/link";
import { pressStart2P } from "@/utils/fonts/fonts";
import DarkModeToggle from "@/components/Buttons/DarkModeToggle";

export default function Home() {

  const handleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      {/* Header with logo and login button */}
      <header className="flex items-center bg-main-light dark:bg-main-dark sticky top-0 justify-center sm:justify-between py-2 px-4 border-b-2 mx-4 border-amethyst dark:border-grape z-50">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <img src="logoLight.png" className="block dark:hidden rounded-full w-12 h-12" />
          <img src="logoDark.png" className="hidden dark:block rounded-full w-12 h-12" />
          <h1 className={`${pressStart2P.className} text-3xl font-bold`}>EDUK2</h1>
        </div>
        <div className="flex gap-2">
          <DarkModeToggle handleDarkMode={handleDarkMode} />
          <Link href="/access" className="hidden sm:block bg-transparent border-2 border-amethyst dark:border-grape text-2xl font-bold rounded-full hover:bg-amethyst dark:hover:bg-grape hover:text-white px-8 py-1" >
            Ingresar
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto gap-4 min-h-screen w-full items-center mt-2 lg:px-14 xl:px-24 2xl:px-20">
        <section className="flex flex-col top-0 mb-16 md:flex-row">
          <img src="logoLight.png" className="px-6 py-8 block dark:hidden" />
          <img src="logoDark.png" className="px-6 py-8 hidden dark:block" />
          <div className="w-full flex items-center justify-center text-center flex-col">
            <h2 className="text-4xl font-bold pt-4 mb-4">¿Qué es EDUK2?</h2>
            <p className="text-xl px-8 sm:px-4 py-2 sm:text-balance mb-6">
              EDUK2 es una plataforma de educación en línea que provee un entorno donde profundizar tus conocimientos y que te premia por estudiar.
            </p>

            <Link href="/access" className="border-2 border-amethyst dark:border-grape text-2xl font-bold rounded-full hover:bg-amethyst dark:hover:bg-grape hover:text-white text-center px-8 py-1 w-fit" >
              Ingresar
            </Link>

          </div>
        </section>
        <section className="flex flex-col w-full mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-center p-4">
            ¿Por qué EDUK2?
          </h2>
          <div className="w-full flex flex-col gap-4 my-2 px-6 xl:my-10 xl:flex-row">
            <LandingInfoCard title="Información" logo={'landing-book.svg'}>
              Todo el material de estudio que necesitas en un solo lugar, mejora tus conocimientos más allá del salón de clases.
            </LandingInfoCard>
            <LandingInfoCard title="Accesibilidad" logo={'landing-phone.svg'}>
              Accede a tus cursos desde tu computadora o dispositivo móvil, aprende a tu ritmo donde y cuando te sientas más comodo.
            </LandingInfoCard>
            <LandingInfoCard title="Compite" logo={'landing-medal.svg'}>
              Acumula puntos, obtén medallas por tus logros, compite con tus compañeros y gana premios por tu esfuerzo y dedicación.
            </LandingInfoCard>
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-4xl font-bold p-4 text-center lg:text-5xl xl:my-8 mb-8">
            Nuestra inspiración
          </h2>
          <div className="my-4 mx-16 flex flex-col justify-center lg:flex-row-reverse lg:justify-center lg:items-center mb-16">
            <img src="images/TeacherPhoto.jpeg" className="mb-2 2xl:h-[550px] 2xl:w-[550px] rounded-full" />
            <p className="text-xl text-center p-4 2xl:mx-11">
              Francia Rocio Zemanate, docente Licenciada en Ciencias Sociales, especialista en pedagogía lúdica, con una sólida trayectoria de más de 32 años en el campo de la educación pública.
            </p>
          </div>
          <p className="italic text-xl text-center text-balance mx-8">
            &lsquo;&lsquo;Mi experiencia abarca todos los grados de educación básica primaria, donde he tenido el privilegio de trabajar con niños y jóvenes en diversas asignaturas. Mi pasión por la educación me ha llevado a explorar nuevas formas de enseñanza, donde el juego y la diversión son la clave para el aprendizaje significativo.&rsquo;&rsquo;
          </p>
        </section>
      </main>
      <footer className="flex justify-center mt-8">
        <p className="font-mono lg:text-xl py-4">Made with ❤️ by <span className="font-bold">Aragangs.dev</span></p>
      </footer>
    </>
  );
}
