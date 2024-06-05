import Link from "next/link";

export default function InfoCourseCard({ course }) {
  let courseImage = "";

  if (course.urlPhoto === "") {
    courseImage = "https://placehold.co/400x200?font=Montserrat&text=" + course.name;
  } else {
    courseImage = course.urlPhoto;
  }

  return (
    <div className="hover:scale-105 duration-200 transition-all flex flex-col w-full md:w-[300px] 2xl:w-[400px] border border-black border-opacity-15 hover:shadow-xl shadow-md shadow-gray-300 dark:shadow-none hover:cursor-pointer rounded-lg bg-main-light">
      <Link href={`/course/${course.id}`}>
        <img
          src={courseImage}
          alt={course.name}
          className="rounded-t-lg object-cover w-full h-[100px] 2xl:h-[180px]"      
        />
        <div className="rounded-b-lg p-4">
          <h3 className="text-2xl text-main-dark font-bold">{course.name}</h3>
        </div>
      </Link>
    </div>
  );
}