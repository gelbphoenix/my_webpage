import { Button } from 'flowbite-react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiSolidShow } from 'react-icons/bi';
import { db } from 'Assets/database';

const ProjectItem = ({ title, link, page }) => {
  const ghUserName = db.env.username;

  if (title === `${ghUserName}/${ghUserName}`) return;

  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-gray-400 to-[#001b5e] dark:from-gray-600 dark:to-[#4673e4] overflow-hidden object-contain">
        <img
          src={`https://raw.githubusercontent.com/${title}/main/public/picture.webp`}
          className="rounded-xl group-hover:opacity-10 ease-out duration-100 aspect-square object-cover object-left bg-gray-400 w-full"
          onError={({ currentTarget }) => {
            currentTarget.onError = null;
            currentTarget.src = `https://avatars.githubusercontent.com/${ghUserName}`
          }}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[75%]">
          <h3 className="mdl:text-1xl text-base font-bold text-white tracking-wider text-center truncate">
            {title}
          </h3>
          <div className="flex gap-1 min-w- mt-2 justify-around">
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 text-gray-700 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <AiOutlineInfoCircle size={20} />
              <span id={`${title}_repo`} className="sm:block ml-1 hidden">
                Repo
              </span>
            </Button>
            {page !== window.location.href.substring(0, 22) ? (
              <Button
                as="a"
                href={page}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-gray-400 dark:bg-gray-600 text-gray-700 dark:text-white font-bold hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                <BiSolidShow size={20} />
                <span className="sm:block ml-1 hidden">Demo</span>
              </Button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
