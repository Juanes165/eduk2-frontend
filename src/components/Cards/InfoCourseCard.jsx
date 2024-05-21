import Link from "next/link";

export default function InfoCourseCard({ course }) {
  let courseImage = "";

  if (course.urlPhoto === "") {
    courseImage = "https://placehold.co/400x200?font=Montserrat&text=" + course.name;
  } else {
    courseImage = course.urlPhoto;
  }

  return (
    <div className="flex flex-col w-full md:max-w-[400px] border border-black border-opacity-15 hover:shadow-xl dark:hover:border-4 dark:hover:border-amethyst 2xl:h-[260px] shadow-md shadow-gray-300 dark:shadow-none hover:cursor-pointer rounded-lg bg-main-light">
      <Link href={`/course/${course.name}?id=${course.id}`}>
        <img 
          src={courseImage} 
          alt={course.name} 
          className="rounded-t-lg object-cover w-full h-[200px]"      
        />
        <div className="rounded-b-lg p-4">
          <h3 className="text-2xl uppercase text-black font-bold">{course.name}</h3>
        </div>
      </Link>
    </div>
  );
}