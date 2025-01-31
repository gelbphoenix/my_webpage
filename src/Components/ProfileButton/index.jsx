import { Button, Tooltip } from 'flowbite-react';
import { db } from 'Assets/database.jsx';

const ProfileButton = ({ icon, title, longTitle, mobile }) => {
  const { env } = db;

  return (
    <>
      <Tooltip content={longTitle} placement={mobile ? 'bottom' : 'left'}>
        <Button
          as="a"
          href={`https://${env.domain.link}/${title.toLowerCase()}`}
          target="_blank"
          rel={`noopener noreferrer`}
          className="rounded-full shadow-lg text-black dark:text-gray-200 bg-stone-300 dark:bg-stone-600 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-gray-400 dark:shadow-gray-600 m-2 cursor-pointer hover:scale-110 ease-in duration-200 focus-visible:ring-0"
        >
          {icon}
        </Button>
      </Tooltip>
    </>
  );
};

export default ProfileButton;
