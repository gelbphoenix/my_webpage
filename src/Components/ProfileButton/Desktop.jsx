import { Button, Tooltip } from 'flowbite-react';

const DesktopProfile = ({ link, icon, title }) => {
  return (
    <>
      <Tooltip content={title} placement="left">
        <Button
          as="a"
          href={link}
          rel={`noopener noreferrer`}
          className="rounded-full shadow-lg text-black dark:text-white bg-gray-200 dark:bg-gray-900 shadow-gray-400 dark:shadow-gray-600 m-2 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300"
        >
          {icon}
        </Button>
      </Tooltip>
    </>
  );
};

export default DesktopProfile;
