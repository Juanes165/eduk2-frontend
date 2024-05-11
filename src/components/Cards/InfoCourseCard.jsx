import Link from "next/link";

export default function InfoCourseCard({ course }) {
  return (
    <div className="flex flex-col w-full h-[250px] md:w-[400px] md:h-[170px] 2xl:h-[260px] shadow-md shadow-gray-300 dark:shadow-none hover:cursor-pointer rounded-lg bg-main-light">
      <Link href={`/course/${course.name}?id=${course.id}`}>
        <img 
          src={course.image} 
          alt={course.id} 
          className="rounded-t-lg object-cover"      
        />
        <div className="rounded-b-lg p-4">
          <h3 className="text-2xl uppercase text-black font-bold">{course.name}</h3>
        </div>
      </Link>
    </div>
  );
}