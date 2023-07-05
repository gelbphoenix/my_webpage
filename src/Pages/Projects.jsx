import ProjectItem from '../Components/ProjectItem';
import useProject from '../Hooks/useProject';

const Projects = () => {
  const { data: projects } = useProject();

  return (
    <>
      <div
        id="projects"
        className="max-w-[1040px] lg:max-w-[1100px] m-auto md:px-20 p-4 py-16 dark:bg-gray-900"
      >
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-[#4673e4] pb-2">
          Projects
        </h1>
        <p className="text-center py-8 text-stone-500 dark:text-stone-400">
          These are just a few examples of the projects I have worked on. Each
          project has given me valuable insights into different technologies and
          problem-solving approaches. I am continuously exploring new ideas and
          technologies to expand my skillset and deliver innovative solutions.
        </p>
        <div className=" grid mdl:grid-cols-3 sm:grid-cols-2 gap-12">
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
