'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from 'next/navigation';
import DeleteAccount from "@/components/Modals/DeleteAccount";
import { pressStart2P } from "@/utils/fonts/fonts";
import Image from "next/image";
import { Header } from "@/components/Nav";
import AchievementList from "@/components/Achievement/AchievementList";
import { Trophy, DeleteIcon } from "@/utils/icons/icons";

export default function StudentView() {

    const { user } = useAuth();
    console.log(user);
    const [showModalClose, setShowModalClose] = useState(false)


    const [role, setRole] = useState(null);

    useEffect(() => {
        if (user.role === 'student') {
            setRole('Estudiante');
        } else if (user.role === 'teacher') {
            setRole('Profesor');
        } else if (user.role === 'admin') {
            setRole('Administrador');
        }
    }, [user.role]);

    const handleToggleClose = () => {
        setShowModalClose(!showModalClose);
    }




    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-full w-full mt-10 mb-10">
                <h1 className={`${pressStart2P.className} text-4xl mb-10 dark:border-b-2 shadow-md shadow-violet-dark dark:border-platinum dark:shadow-md dark:shadow-platinum  `}>Perfil</h1>
                <div className="flex w-4/5 h-4/5 flex-col md:flex-row dark:shadow-2xl dark:shadow-platinum rounded">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 dark:mb-4 dark:md:mb-0">
                        {/* Contenido de la primera mitad de la tarjeta */}
                        <div className="bg-white dark:bg-main-dark shadow-md shadow-violet-dark dark:border-gray-700 border-t-1 border-b-1 border-l-1 border-r-1 lg:rounded-l-lg rounded-t-lg sm:rounded-t-none border-gray-200 overflow-hidden">

                            <div className="flex flex-col items-center pb-10 mt-10">
                                <img src={user.photoUrl} onError={(e) => e.target.src = '/images/avatar.svg'} alt="Logo" className="mb-4 rounded-full h-24 w-24" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name} {user.lastname}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200 divide-y divide-gray-200">
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex flex-col items-center justify-center">
                                        <dt className="dark:text-white text-sm font-medium text-gray-500 flex flex-col items-center justify-center">
                                            Correo
                                        </dt>
                                        <dd className="dark:text-white mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-col items-center justify-center">
                                            {user.email}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex flex-col items-center justify-center">
                                        <dt className="dark:text-white text-sm font-medium text-gray-500 flex flex-col items-center justify-center">
                                            Grado
                                        </dt>
                                        <dd className="dark:text-white mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-col items-center justify-center">
                                            {user.grade}
                                        </dd>
                                    </div>
                                    <div className="dark:text-white py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex flex-col items-center justify-center">
                                        <dt className="dark:text-white text-sm font-medium text-gray-500 flex flex-col items-center justify-center">
                                            Puntos
                                        </dt>
                                        <dd className="dark:text-white mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-col items-center justify-center">
                                            {user.points}
                                        </dd>
                                    </div>
                                    <div className="flex justify-center px-4 pt-4">
                                        <DeleteIcon alt="close" className="size-10 mb-4 rounded-full cursor-pointer" onClick={handleToggleClose} />
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white shadow-md shadow-violet-dark dark:bg-main-dark dark:border-gray-700 border-t-1 border-b-1 border-r-1 lg:border-l-2 xl:border-l-2 border-gray-200 md:rounded-r-lg rounded-b-lg sm:rounded-b-none">
                        {/* logros*/}
                        <div className="flex flex-wrap items-center justify-center mb-4 mt-4">
                            <p className={`${pressStart2P.className} text-3xl`}>Logros</p>
                            <Trophy className="size-10 ml-5" />
                        </div>
                        <div>
                            <AchievementList badges={user.badges} />
                        </div>

                    </div>
                </div>
                {showModalClose &&
                    <div className="z-20 md:p-20 2xl:p-40 md:rounded-2xl absolute justify-center items-center self-center flex ">
                        <DeleteAccount closeModal={handleToggleClose} />
                    </div>
                }
            </div></>
    );
}