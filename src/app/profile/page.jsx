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




export default function ProfilePage() {

	// const { user } = useAuth();
	// console.log(user);
	const [showModalClose, setShowModalClose] = useState(false);
	const userla = {
		"badges": [["/images/avatar.svg", "Aragang", "Rompiendo los esquemas"], ["/images/avatar.svg", "Con Bendicion", "Siempre crei en ti"], ["/images/avatar.svg", "Soverano", "El rantantantantan"]],
		"photoUrl": "/images/avatar.svg",
		"role": "student",
		"grade": "10-2",
		"name": "Fuan",
		"email": "tranhp@gmail.com",
		"lastname": "Chostoy",
		"points": 0
	}

	const [role, setRole] = useState(null);

	useEffect(() => {
		if (userla.role === 'student') {
			setRole('Estudiante');
		} else if (userla.role === 'teacher') {
			setRole('Profesor');
		} else if (userla.role === 'admin') {
			setRole('Administrador');
		}
	}, [userla.role]);

	const handleToggleClose = () => {
		setShowModalClose(!showModalClose);
	}




	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center h-full w-full mt-10">
				<h1 className={`${pressStart2P.className} text-4xl mb-10`}>Perfil</h1>
				<div className="flex w-4/5 h-4/5 flex-col md:flex-row">
					<div className="w-full md:w-1/2">
						{/* Contenido de la primera mitad de la tarjeta */}
						{/* libro inclinado hoja izquierda */}
						<div className="bg-white border border-gray-200 rounded-lg shadow-2xl dark:shadow-grape dark:bg-main-dark dark:border-gray-700 ">
							<div className="flex justify-end px-4 pt-4">
								{/* img onclick */}
								<DeleteIcon alt="close" className="size-10 mb-4 rounded-full cursor-pointer" onClick={handleToggleClose} />
							</div>
							<div className="flex flex-col items-center pb-10">
								<img src={userla.photoUrl} onError={(e) => e.target.src = '/images/avatar.svg'} alt="Logo" className="mb-4 rounded-full" />
								<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userla.name} {userla.lastname}</h5>
								<span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
							</div>
							<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
								<dl className="sm:divide-y sm:divide-gray-200">
									<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex flex-col items-center justify-center">
										<dt className="dark:text-white text-sm font-medium text-gray-500 flex flex-col items-center justify-center">
											Correo
										</dt>
										<dd className="dark:text-white mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-col items-center justify-center">
											{userla.email}
										</dd>
									</div>
									<div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex flex-col items-center justify-center">
										<dt className="dark:text-white text-sm font-medium text-gray-500 flex flex-col items-center justify-center">
											Grado
										</dt>
										<dd className="dark:text-white mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-col items-center justify-center">
											{userla.grade}
										</dd>
									</div>
									<div className="dark:text-white py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex flex-col items-center justify-center">
										<dt className="dark:text-white text-sm font-medium text-gray-500 flex flex-col items-center justify-center">
											Puntos
										</dt>
										<dd className="dark:text-white mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-col items-center justify-center">
											{userla.points}
										</dd>
									</div>
								</dl>
							</div>
						</div>

					</div>
					<div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-2xl dark:shadow-grape dark:bg-main-dark dark:border-gray-700">
						{/* logros*/}
						{/* <h2 className={`${pressStart2P.className} text-3xl mb-10`}>Logros</h2> */}
						<div className="flex flex-wrap items-center justify-center ">
								<p className={`${pressStart2P.className} text-3xl`}>Logros</p>
								<Trophy className="size-10 ml-5" />

						</div>
						<div className="flex flex-col">
							<AchievementList badges={userla.badges} />
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