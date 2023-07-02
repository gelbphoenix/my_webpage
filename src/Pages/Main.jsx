import { TypeAnimation } from 'react-type-animation';
import Profile from '../Components/Profile';
import { db } from '../Assets/database';

const Main = () => {
  const { profiles } = db;

  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1687704841026-f8fff04d0b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        alt=""
        className="w-full h-screen object-cover scale-x-[-1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 dark:bg-black/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 dark:text-gray-300">
            I`m Phoenix Paulina Schmid
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 dark:text-gray-300">
            I`m a
            <TypeAnimation
              sequence={['Developer', 1500, 'Coder', 1500, 'Lerner', 1500]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div
            className={`flex justify-between pt-6 max-w-[350px] w-full items-center`}
          >
            {profiles.map((profile, index) => (
              <Profile
                icon={profile.icon}
                link={profile.link}
                title={profile.title}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
