import Link from "next/link";
import { motion } from "framer-motion";

export default function EditableCourseCard({ course }) {
  let courseImage = "";

  if (course.urlPhoto === "") {
    courseImage = "https://placehold.co/400x200?font=Montserrat&text=" + course.name;
  } else {
    courseImage = course.urlPhoto;
  }

  return (
    <div className="hover:scale-105 duration-200 transition-all flex flex-col w-full md:w-[300px] 2xl:w-[400px] border border-black border-opacity-15 hover:shadow-xl shadow-md shadow-gray-300 dark:shadow-none hover:cursor-pointer rounded-lg bg-main-light">
        <img
          src={courseImage}
          alt={course.name}
          className="rounded-t-lg object-cover w-full h-[100px] 2xl:h-[180px] hidden md:block"      
        />
        <div className="rounded-b-lg p-4 flex justify-between">
          <h3 className="text-2xl text-main-dark font-bold">{course.name}</h3>
          <div className="flex items-center gap-5">
            <Link href={`/course/${course.id}`}>
                <p className="bg-amethyst hover:bg-grape dark:bg-grape dark:hover:bg-amethyst rounded-md py-1 px-3 font-bold text-main-light md:text-xl">
                    Editar 
                </p>
            </Link>
          </div>
        </div>
    </div>
  );
}