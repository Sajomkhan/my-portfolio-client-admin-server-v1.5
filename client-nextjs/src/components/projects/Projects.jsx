

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section id="Projects" className="w-full text-2xl section_color py-16">
      <h1 className="mb-12 text-center text-3xl font-bold">Projects</h1>
      <div className="flex flex-wrap justify-center gap-14 my-8 mx-6">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </section>
  );
};

export default Projects;
