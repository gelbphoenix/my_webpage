const TechStackItem = ({ icon, title, tLong }) => {
  return (
    <>
      <div className="relative flex flex-[1_1_275px] items-center justify-center aspect-video rounded-xl group overflow-hidden object-contain hover:bg-[#001b5e89]">
        <div className="flex flex-col items-center justify-center">
          <div className="group-hover:opacity-25 ease-out duration-100 aspect-auto dark:text-stone-300 w-full flex items-center justify-center">
            {icon}
          </div>
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[75%]">
            <h3 className="mdl:text-1xl text-lg font-extrabold text-gray-200 tracking-wider text-center truncate">
              {title}
            </h3>
            <h4 className="mdl:text-1xl text-base font-bold text-gray-200 tracking-wider text-center truncate">
              {tLong}
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechStackItem