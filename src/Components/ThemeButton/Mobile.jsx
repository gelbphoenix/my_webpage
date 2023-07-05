import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { Button } from 'flowbite-react';
import { BsMoonFill, BsSun } from 'react-icons/bs';

const MobileThemeButton = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  return (
    <Button
      onClick={() => handleThemeChange()}
      className="w-[75%] flex justify-center items-center rounded-full shadow-lg text-black dark:text-white bg-gray-200 dark:bg-gray-900 shadow-gray-400 dark:shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300 hover:dark:bg-gray-800"
    >
      {theme ? <BsMoonFill size={20} /> : <BsSun size={20} />}
      <span className="pl-4 text-lg font-bold">
        {theme ? 'Dark mode' : 'Light mode'}
      </span>
    </Button>
  );
};

export default MobileThemeButton;
