import { db } from '../Assets/database';
import AboutItem from '../Components/AboutItem';

const About = () => {
  const { about } = db;

  return (
    <>
      <div
        id="about"
        className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 dark:bg-gray-700"
      >
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-[#4673e4] pb-2">
          About me
        </h1>
        {about.map((item, index) => (
          <AboutItem
            key={index}
            details={item.details}
            duration={item.duration}
            title={item.title}
            year={item.year}
          />
        ))}
      </div>
    </>
  );
};

export default About;
