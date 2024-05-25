import Image from 'next/image';

const AchievementList = ({ badges }) => {
  return (
    <ul role="list" className="divide-y divide-gray-400 transform">
      {badges.map((badge, index) => (
        <li key={index} className="flex justify-between gap-x-40 md:gap-x-5 py-3">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full ml-4" src={badge[0]} alt={badge[1]} />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-10 balance text-center text-gray-900 dark:text-white">{badge[1]}</p>
              {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{badge[2]}</p> */}
            </div>
          </div>
          <div className="flex flex-col items-end ml-10">
            <p className="text-sm font-semibold leading-10 text-gray-900 balance text-center mr-4 dark:text-white">{badge[2]}</p>
            </div>

        </li>
      ))}
    </ul>
  );
};

export default AchievementList;
