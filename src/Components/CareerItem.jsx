const CareerItem = ({ company, details, duration, year, title }) => {
  return (
    <>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-300 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-300 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border-white dark:border-gray-900" />
          <div className="flex flex-wrap flex-row gap-4 items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] dark:bg-[#001b7e] rounded-md">
              {year}
            </span>
            <p className="flex gap-4 items-baseline">
              <span className="text-lg font-bold text-[#001b5e] dark:text-[#1d3de0]">
                {title}
              </span>
              <span className="text-sm font-semibold uppercase leading-none text-stone-600 dark:text-stone-300">
                {company}
              </span>
              <span className="text-sm font-medium leading-none text-stone-600 dark:text-stone-300">
                {duration.text}{' '}
                {duration.value && `(to ${year + duration.value})`}
              </span>
            </p>
          </div>
          <div className="my-2 text-base font-normal text-stone-600 dark:text-stone-300">
            {details}
          </div>
        </li>
      </ol>
    </>
  );
};

export default CareerItem;
