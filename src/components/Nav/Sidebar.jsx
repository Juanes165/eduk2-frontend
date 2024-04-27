'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Sidebar({ openedSidebar, sidebarRef }) {

    const [showNav, setShowNav] = useState(true);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        setSubjects(exampleSubjects);
    }, []);

    return (
        <aside ref={sidebarRef} className={`group overflow-x-hidden border-r-[1px] border-main-dark/25 dark:border-main-light/25 bg-main-light dark:bg-main-dark z-50 overflow-auto flex flex-col justify-between ${openedSidebar ? "" : "-translate-x-64 lg:w-20 lg:translate-x-0"} px-4 py-4 absolute w-64 transition-all duration-200 h-[calc(100vh-4rem)] hover:w-64`}>
            {/* first half, profile picture, name and achievements */}
            <div className='mb-6'>
                <div className={`${openedSidebar ? "px-8" : "px-8 lg:px-0"} mb-4 group-hover:px-8 group-hover:mb-4 text-center transition-all duration-200`}>

                    {/* Profile picture */}
                    <div className="relative">
                        <img src="https://via.placeholder.com/300" alt="Logo" className="mb-4 rounded-full" />
                        <Link href="/profile">
                            <div className={`absolute top-0 right-0 ${openedSidebar ? "flex" : "hidden"} group-hover:flex w-full h-full rounded-full items-center justify-center bg-transparent cursor-pointer hover:bg-main-dark/25 text-main-light/0 hover:text-main-light transition-all duration-200`}>
                                <span className='text-2xl font-semibold'>Ver perfil</span>
                            </div>
                        </Link>
                    </div>

                    {/* Name */}
                    <span className={` ${openedSidebar ? "opacity-100 delay-100" : "opacity-0 delay-0"} group-hover:opacity-100 group-hover:delay-100 text-lg text-nowrap font-semibold`}>
                        Nombre Apellido
                    </span>
                </div>


                {/* Achievements */}
                <div className={`flex ${openedSidebar ? "px-4" : "px-0"} gap-2 flex-wrap group-hover:px-4 justify-between mb-4 transition-all duration-200`}>
                    <div className={`bg-amber-300 rounded-full h-12 w-12`} />
                    <div className={`bg-amber-300 rounded-full h-12 w-12`} />
                    <div className={`bg-amber-300 rounded-full h-12 w-12`} />
                </div>
            </div>

            {/* second half, subjects navigation */}
            <div>
                <div className='w-full border-t-[1px] border-main-dark/25 dark:border-main-light/25 mb-2'></div>

                {/* deployable menu */}
                <button type='button' onClick={() => setShowNav(!showNav)} className='flex flex-row items-center rounded-xl hover:bg-platinum dark:hover:bg-violet-dark py-2 px-4'>
                    <svg className="mr-6 fill-main-dark dark:fill-main-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5q0 .625.438 1.063T20 20v2zM6 15.325q.35-.175.725-.25T7.5 15H8V4h-.5q-.625 0-1.062.438T6 5.5zM10 15h8V4h-8zm-4 .325V4zM7.5 20h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20" />
                    </svg>
                    <span className={`group-hover:block text-nowrap text-lg`}>
                        Tus cursos
                    </span>
                    <svg className={`ml-8 animate-all duration-300 ${showNav ? "-rotate-90" : "rotate-90"} fill-main-dark dark:fill-main-light`} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z" />
                    </svg>
                </button>

                {/* subjects */}
                {showNav && (
                    <nav className={`delay-200 ${openedSidebar ? "flex" : ""} group-hover:flex group-hover:visible`}>
                        <ul className='w-full'>
                            {subjects.map((subject, index) => (
                                <li className='mt-2' key={index}>
                                    <Link href={subject.href} className='flex items-center w-full rounded-xl border-main-dark/25 dark:border-main-light/50 px-3 py-1 text-lg hover:bg-platinum dark:hover:bg-violet-dark'>
                                        <div className='flex'>
                                            <img src={subject.imageUrl} alt="Logo" className="mr-5 w-8 h-8 rounded-full" />
                                            <span className='align-middle'>{subject.name}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </aside>
    );
};

const exampleSubjects = [
    {
        name: 'Matemáticas',
        href: '#',
        imageUrl: 'https://via.placeholder.com/100',
    },
    {
        name: 'Ciencias',
        href: '#',
        imageUrl: 'https://via.placeholder.com/100',
    },
    {
        name: 'Español',
        href: '#',
        imageUrl: 'https://via.placeholder.com/100',
    },
    {
        name: 'Matemáticas',
        href: '#',
        imageUrl: 'https://via.placeholder.com/100',
    },
    {
        name: 'Matemáticas',
        href: '#',
        imageUrl: 'https://via.placeholder.com/100',
    },
    {
        name: 'Matemáticas',
        href: '#',
        imageUrl: 'https://via.placeholder.com/100',
    }
]