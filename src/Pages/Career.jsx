import { db } from '../Assets/database';
import CareerItem from '../Components/CareerItem';

const Career = () => {
  const { career } = db;

  return (
    <>
      <div
        id="career"
        className="max-w-[1040px] lg:max-w-[1100px] m-auto md:pl-20 p-4 py-16 dark:bg-gray-700"
      >
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-[#4673e4] pb-2">
          My Career
        </h1>
        {career.map((item, index) => (
          <CareerItem
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

export default Career;
