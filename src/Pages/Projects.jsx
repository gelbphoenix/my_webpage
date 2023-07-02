import ProjectItem from '../Components/ProjectItem';
import useProject from '../Hooks/useProject';

const Projects = () => {
  const { data: projects } = useProject();

  return (
    <>
      <div
        id="projects"
        className="max-w-[1040px] lg:max-w-[1100px] m-auto md:px-20 p-4 py-16 dark:bg-gray-700"
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
          {projects?.map(project => {
            return (
              <ProjectItem
                key={project.id}
                link={project.html_url}
                title={project.full_name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
