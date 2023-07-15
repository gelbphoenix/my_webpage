import { db } from "Assets/database"
import TechStackItem from "Components/TechStackItem"

const TechStack = () => {
  const { techStack } = db

  return (
    <>
      <section
        id="techstack"
        className="xl:max-w-[1200px] lg:max-w-[1100px] max-w-[1040px] md:m-auto mr-6 md:px-20 p-4 py-16 dark:bg-gray-900"
      >
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-[#4673e4] pb-2">
          Tech Stack
        </h1>
        <div className="flex flex-wrap pt-4 [&>*]:flex-[1_1_9rem]">
          {techStack.map((item, index) => (
            <TechStackItem
              key={index}
              icon={item.icon}
              title={item.title}
              tLong={item.title_long}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default TechStack