import { Button, Tooltip } from 'flowbite-react';

const DesktopMenuButton = ({ link, icon, title }) => {
  return (
    <>
      <Tooltip content={title} placement="right">
        <Button
          as="a"
          href={link}
          className="rounded-full shadow-lg text-black dark:text-gray-200 bg-stone-300 dark:bg-stone-600 shadow-gray-400 dark:shadow-gray-600 m-2 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300"
        >
          {icon}
        </Button>
      </Tooltip>
    </>
  );
};

export default DesktopMenuButton;
