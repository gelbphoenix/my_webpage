import { db } from '../Assets/database';

const About = () => {
  const { about } = db;

  return (
    <>
      <div
        id="about"
        className="xl:max-w-[1200px] lg:max-w-[1100px] max-w-[1040px] md:m-auto mr-6 md:px-20 p-4 py-16 dark:bg-gray-900"
      >
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-[#4673e4] pb-2">
          About me
        </h1>
        {about.map((item, index) => (
          <p
            className="text-center py-8 text-stone-500 dark:text-stone-300"
            key={index}
          >
            {item.text}
          </p>
        ))}
      </div>
    </>
  );
};

export default About;
