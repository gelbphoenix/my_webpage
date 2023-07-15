import { Button } from "flowbite-react"
import {AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
        <div className="grid grid-cols-3 gap-2 pb-2 text-sm">
          <section className="flex lg:flex-row flex-col justify-center items-start content-center flex-wrap text-gray-500 dark:text-gray-300">
            &copy; {new Date().getFullYear() !== 2023 ? `2023 - ${new Date().getFullYear()}` : new Date().getFullYear()}
            <span className="font-bold lg:ml-1 flex flex-row">
               Made with<p className="text-red-600 lg:mx-1 mx-0.5">{'<3'}</p>by Phoenix Paulina Schmid
            </span>
          </section>
          <section className="flex lg:flex-row flex-col justify-center items-center flex-wrap text-gray-500 dark:text-gray-300">
            <Button as="a" href="#contact" className="rounded-full shadow-lg text-stone-200 dark:text-black bg-[#001b5e] dark:bg-[#4673e4] shadow-gray-400 dark:shadow-gray-600 m-2 p-1 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#001b7c] dark:hover:bg-[#4674c6] font-extrabold uppercase">
              <AiOutlineMail size={20} />
            </Button>
          </section>
          <section className="flex lg:flex-row flex-col flex-wrap justify-between items-end content-center text-gray-500 dark:text-gray-300">
            <a
              href="#"
              className="hover:underline"
            >
              https://gelbphoenix.de/
            </a>
            <a
              href="mailto:paulina@gelbphoenix.de"
              className="hover:underline"
            >
              paulina@gelbphoenix.de
            </a>
          </section> 
        </div>
    </>
  )
}

export default Footer