import { Button } from 'flowbite-react';

const MobileMenuButton = ({ title, icon, link, handleClick }) => {
  return (
    <Button
      as="a"
      onClick={handleClick}
      href={link}
      className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-black dark:text-white bg-gray-200 dark:bg-gray-900 shadow-gray-400 dark:shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300 hover:dark:bg-gray-800"
    >
      {icon}
      <span className="pl-4 text-lg font-bold">{title}</span>
    </Button>
  );
};

export default MobileMenuButton;
