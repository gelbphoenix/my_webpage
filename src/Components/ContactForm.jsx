import { Button } from 'flowbite-react';

const ContactForm = ({ link }) => {
  return (
    <>
      <form action={link} method="POST" className="dark:text-stone-300">
        <div className="grid sm:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              required
              className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              required
              className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
              Phone number
            </label>
            <input
              type="text"
              name="phone_number"
              required
              className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
              EMail
            </label>
            <input
              type="email"
              name="email"
              required
              className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
            Message
          </label>
          <textarea
            rows="6"
            name="message"
            required
            className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
          ></textarea>
        </div>
        <Button
          type="submit"
          required
          className="bg-[#001b5e] dark:bg-[#4673e4] text-gray-300 mt-4 w-full p-4 uppercase font-extrabold hover:bg-inherit focus:ring-0"
        >
          Send Message
        </Button>
        <div
          className="overflow-hidden whitespace-nowrap indent-[-99999px] absolute"
          aria-hidden="true"
        >
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
