'use client';
import React, { useState } from 'react';

export default function Sidebar({ openedSidebar, sidebarRef }) {

    const [showNav, setShowNav] = useState(true);

    return (
        <aside ref={sidebarRef} className={`group border-r-[1px] border-main-dark/25 dark:border-main-light/25 bg-main-light dark:bg-main-dark z-50 overflow-auto flex flex-col justify-between ${openedSidebar ? "px-4 py-2" : "-translate-x-64 md:w-20 md:translate-x-0 px-4 py-4"} hover:py-2 absolute lg:relative w-64 transition-all duration-[200ms] h-[calc(100vh-4rem)] hover:w-64`}>
            <div className='mb-6'>
                <div className={`${openedSidebar ? "px-8" : ""} group-hover:px-8 mb-4 text-center`}>
                    <img src="https://via.placeholder.com/300" alt="Logo" className="mb-4 rounded-full" />
                    <div className={`${openedSidebar ? "" : ""} absolute w-40 h-40 rounded-full flex items-center justify-center -translate-y-44 bg-transparent cursor-pointer hover:bg-main-dark/25 text-main-light/0 hover:text-main-light transition-all duration-300`}>
                        <span className='text-2xl font-semibold'>Ver perfil</span>
                    </div>
                    <span className={`${openedSidebar ? "" : "hidden"} group-hover:block text-lg text-nowrap text-main-dark dark:text-main-light font-semibold`}>
                        Nombre Apellido
                    </span>
                </div>

                <div className={`flex ${openedSidebar ? "" : ""} gap-2 flex-wrap justify-between mb-4`}>
                    <div className='bg-amber-300 rounded-full h-12 w-12'></div>
                    <div className='bg-amber-300 rounded-full h-12 w-12'></div>
                    <div className='bg-amber-300 rounded-full h-12 w-12'></div>
                </div>

            </div>

            <div>
                <div className='w-full border-t-[1px] border-main-dark/25 dark:border-main-light/25 mb-2'></div>
                <button type='button' onClick={() => setShowNav(!showNav)} className='flex flex-row items-center rounded-xl hover:bg-gray-200 dark:hover:bg-violet-dark py-2 px-4'>
                    <svg className="mr-2 fill-main-dark dark:fill-main-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5q0 .625.438 1.063T20 20v2zM6 15.325q.35-.175.725-.25T7.5 15H8V4h-.5q-.625 0-1.062.438T6 5.5zM10 15h8V4h-8zm-4 .325V4zM7.5 20h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20" />
                    </svg>
                    <span className={`${openedSidebar ? "" : "hidden"} group-hover:block text-nowrap text-lg`}>Tus cursos</span>
                    <svg className={`ml-12 animate-all duration-300 ${showNav ? "-rotate-90" : "rotate-90"} fill-main-dark dark:fill-main-light`} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z" />
                    </svg>
                </button>
                {showNav && openedSidebar &&
                    <nav className='flex '>
                        <ul className='w-full'>
                            {subjects.map((subject, index) => (
                                <li className='mt-4' key={index}>
                                    <a href={subject.href} className='flex items-center'>
                                        <div className='rounded-xl w-full border-[1px] border-main-dark/25 dark:border-main-light/50 px-6 py-1 text-lg hover:bg-gray-200 dark:hover:bg-violet-dark'>
                                            {subject.name}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                }
            </div>
        </aside>
    );
};

const subjects = [
    {
        name: 'Matemáticas',
        href: '#',
    },
    {
        name: 'Ciencias',
        href: '#',
    },
    {
        name: 'Español',
        href: '#',
    },
    {
        name: 'Matemáticas',
        href: '#',
    },
    {
        name: 'Matemáticas',
        href: '#',
    },
    {
        name: 'Matemáticas',
        href: '#',
    }
]