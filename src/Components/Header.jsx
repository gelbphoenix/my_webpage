import { useMemo, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { db } from 'Assets/database';
import { DesktopMenuButton, MobileMenuButton } from 'Components/MenuButton';
import { DesktopThemeButton, MobileThemeButton } from 'Components/ThemeButton';
import ProfileButton from 'Components/ProfileButton';
import Toast from 'Components/Toast';

const Header = () => {
  const [nav, setNav] = useState(false);
  const { sites, profiles, toast } = db;
  const [insetYSites, setInsetYSites] = useState(0);
  const [insetYProfiles, setInsetYProfiles] = useState(0);

  const countSites = useMemo(() => sites.length + 1, [sites.length]);
  const countProfiles = useMemo(() => profiles.length, [profiles.length]);
  const calcInset = count => (window.innerHeight - count * 68) / 2;

  useEffect(() => {
    setInsetYProfiles(calcInset(countProfiles));
    setInsetYSites(calcInset(countSites));
  }, [countProfiles, countSites]);

  useEffect(() => {
    const onResize = () => {
      setInsetYProfiles(calcInset(countProfiles));
      setInsetYSites(calcInset(countSites));
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [countProfiles, countSites]);

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
        style={{ insetBlock: `${insetYSites}px` }}
        className={`md:block hidden fixed left-[.1875rem] z-10`}
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
        style={{ insetBlock: `${insetYProfiles}px` }}
        className={`md:block hidden fixed right-[.1875rem] z-10`}
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
