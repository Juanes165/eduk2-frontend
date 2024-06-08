const AchievementList = ({ badges = [] }) => {
  return (

    <ul role="list" className="sm:divide-y sm:divide-gray-200 divide-y divide-gray-200">
      {badges.map((badge, index) => (
        <li key={index} className=" justify-between gap-x-40 md:gap-x-5 py-3">
          <div className="flex gap-x-4 items-center">
            <img className="h-12 w-12 flex-none rounded-full ml-4" src={badge.url} alt={badge.title} />
            <div className="text-left">
              <p className="text-sm font-semibold leading-10 balance text-gray-900 dark:text-white">{badge.title}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{badge.description}</p>
            </div>
          </div>
          <div className="flex flex-col items-end ml-10">
            <p className="text-sm font-semibold leading-10 text-gray-900 balance text-center mr-4 dark:text-white">{badge.points}</p>
          </div>
        </li>
      ))}
    </ul>

  );
};

export default AchievementList;
