import { db } from '../Assets/database';
import ProjectItem from '../Components/ProjectItem';

const Projects = () => {
  const { projects } = db;

  return (
    <>
      <div
        id="projects"
        className="max-w-[1040px] lg:max-w-[1100px] m-auto md:pl-20 p-4 py-16 dark:bg-gray-700"
      >
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-[#4673e4] pb-2">
          Projects
        </h1>
        <p className="text-center py-8 text-stone-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          fugiat. Molestias necessitatibus cum esse numquam quibusdam facilis
          perferendis vitae exercitationem distinctio, itaque iure ex? Harum
          deleniti quaerat adipisci minima asperiores?
        </p>
        <div className=" grid sm:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              img={project.img}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
