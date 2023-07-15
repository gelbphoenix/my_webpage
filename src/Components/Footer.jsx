const Footer = () => {
  return (
    <>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <section className="flex lg:flex-row flex-col justify-start items-center flex-wrap text-gray-500 dark:text-gray-300">
            &copy; {new Date().getFullYear()} -
            <span className="font-bold lg:ml-1 flex flex-row">
              Made with<p className="text-red-600 mx-1">{'<3'}</p>by Phoenix Paulina Schmid
            </span>
          </section>
          <section className="flex lg:flex-row flex-col justify-between items-end gap-1 text-gray-500 dark:text-gray-300">
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