import { Button } from 'flowbite-react';

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 dark:bg-gray-700"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-[#4673e4] pb-2">
        Contact me
      </h1>
      {/* add action */}
      <form action="" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">First Name</label>
            <input
              type="text"
              name="first_name"
              className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Last Name</label>
            <input
              type="text"
              name="last_name"
              className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone number</label>
            <input
              type="text"
              name="phone_number"
              className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">EMail</label>
            <input
              type="email"
              name="email"
              className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            type="text"
            name="subject"
            className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            rows="10"
            name="message"
            className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-600 dark:bg-gray-700  dark:text-gray-300"
          ></textarea>
        </div>
        <Button className="bg-[#001b5e] text-gray-300 mt-4 w-full p-4">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
