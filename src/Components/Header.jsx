import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { db } from 'Assets/database';
import { DesktopMenuButton, MobileMenuButton } from 'Components/MenuButton';
import { DesktopThemeButton, MobileThemeButton } from 'Components/ThemeButton';
import ProfileButton from 'Components/ProfileButton';
import Toast from 'Components/Toast';

const Header = () => {
  const [nav, setNav] = useState(false);
  const { sites, profiles, toast } = db;

  return (
    <>
      <button
        onClick={() => setNav(!nav)}
        className="md:hidden fixed top-4 right-4 z-[99] dark:text-white focus:ring-0"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </button>

      {nav ? (
        <div className="fixed w-full h-screen bg-white/[0.25] dark:bg-black/[0.35] backdrop-blur flex flex-col justify-center items-center z-20">
          {sites.map((element, index) => (
            <MobileMenuButton
              title={element.title}
              icon={element.icon}
              link={element.link}
              key={index}
              handleClick={() => setNav(!nav)}
            />
          ))}
          <MobileThemeButton />
        </div>
      ) : (
        ''
      )}

      <Toast content={toast[0]} />

      <div
        className={`md:block hidden fixed inset-y-[calc(calc(100vh-calc(6*68px))/2)] left-[.1875rem] z-10`}
      >
        <div className="flex flex-col">
          {sites.map((element, index) => (
            <DesktopMenuButton
              title={element.title}
              icon={element.icon}
              link={element.link}
              key={index}
            />
          ))}
          <DesktopThemeButton />
        </div>
      </div>
      <div
        className={`md:block hidden fixed inset-y-[calc(calc(100vh-calc(3*68px))/2)] right-[.1875rem] z-10`}
      >
        <div className="flex flex-col">
          {profiles.map((profile, index) => (
            <ProfileButton
              key={index}
              icon={profile.icon}
              title={profile.title}
              longTitle={profile.longTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
