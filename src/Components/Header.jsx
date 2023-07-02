import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { DesktopMenuButton, MobileMenuButton } from './MenuButton';
import { DesktopThemeButton, MobileThemeButton } from './ThemeButton';
import { db } from '../Assets/database';
import { DesktopProfile } from './ProfileButton';

const Header = () => {
  const [nav, setNav] = useState(false);
  const { sites, profiles } = db;

  const handleNav = () => setNav(!nav);

  return (
    <>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden dark:text-white"
        size={25}
      />

      {nav ? (
        <div className="fixed w-full h-screen bg-white/[0.55] dark:bg-black/[0.55] flex flex-col justify-center items-center z-20">
          {sites.map((element, index) => (
            <MobileMenuButton
              title={element.title}
              icon={element.icon}
              link={element.link}
              key={index}
              handleClick={handleNav}
            />
          ))}
          <MobileThemeButton />
        </div>
      ) : (
        ''
      )}

      <div
        className={`md:block hidden fixed inset-y-[calc(calc(100vh-calc(6*68px))/2)] left-0 z-10`}
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
        className={`md:block hidden fixed inset-y-[calc(calc(100vh-calc(5*68px))/2)] right-0 z-10`}
      >
        <div className="flex flex-col">
          {profiles.map((profile, index) => (
            <DesktopProfile
              key={index}
              icon={profile.icon}
              link={profile.link}
              title={profile.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
