import { useContext } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { Button, Tooltip } from 'flowbite-react';
import { ThemeContext } from 'Contexts/ThemeContext';

const DesktopThemeButton = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const themeText = theme ? 'Dark' : 'Light';

  return (
    <>
      <Tooltip content={themeText} placement="right">
        <Button
          onClick={() => handleThemeChange()}
          className="rounded-full shadow-lg text-black dark:text-gray-200 bg-stone-300 dark:bg-stone-600 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-gray-400 dark:shadow-gray-600 m-2 cursor-pointer hover:scale-110 ease-in duration-200 focus-visible:ring-0"
        >
          {theme ? <BsMoon size={20} /> : <BsSun size={20} />}
        </Button>
      </Tooltip>
    </>
  );
};

export default DesktopThemeButton;
