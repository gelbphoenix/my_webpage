import { Button } from 'flowbite-react';

const ProjectItem = ({ img, title, tech, link }) => {
  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] dark:from-gray-600 dark:to-[#4673e4]">
        <img
          src={img}
          alt={title}
          className="rounded-xl group-hover:opacity-10 aspect-square object-cover object-left"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl font-bold text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="text-center text-sm text-stone-300">{tech}</p>
          <Button
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=" w-full mt-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-white font-bold"
          >
            More Info
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
