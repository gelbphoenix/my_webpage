import { Button, Tooltip } from 'flowbite-react';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../Context/ThemeContext';
import { useContext } from 'react';

const DesktopThemeButton = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const themeText = theme ? 'Dark' : 'Light';

  return (
    <>
      <Tooltip content={themeText} placement="right">
        <Button
          onClick={() => handleThemeChange()}
          className="rounded-full shadow-lg text-black dark:text-white bg-gray-200 dark:bg-gray-900 shadow-gray-400 dark:shadow-gray-600 m-2 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300"
        >
          {theme ? <BsMoonFill size={20} /> : <BsSun size={20} />}
        </Button>
      </Tooltip>
    </>
  );
};

export default DesktopThemeButton;
