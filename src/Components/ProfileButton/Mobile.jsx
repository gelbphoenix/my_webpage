import { Button, Tooltip } from 'flowbite-react';

const MobileProfile = ({ icon, title, longTitle }) => {
  return (
    <>
      <Tooltip content={longTitle} placement="bottom">
        <Button
          as="a"
          href={`https://${title.toLowerCase()}.gelbphoenix.de`}
          target="_blank"
          rel={`noopener noreferrer`}
          className="rounded-full shadow-lg text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-900 shadow-gray-400 dark:shadow-gray-600 m-2 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300 focus-visible:ring-0"
        >
          {icon}
        </Button>
      </Tooltip>
    </>
  );
};

export default MobileProfile;
