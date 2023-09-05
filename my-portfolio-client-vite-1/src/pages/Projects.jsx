
import { projects } from "../data/data";

const Projects = () => {
  return (
    <section id='Projects' className="flex flex-col gap-12  justify-center">
      <h2 className="text-center font-bold ">My Projects & Works</h2>

      <div className="flex flex-wrap justify-center gap-16 lg:px-10">
      { projects.map((project) => {
          const { _id, title, tech, github, live, desc } = project;
          const { url } = project.image;

          return (
            <div key={_id}>
              <div className="flex flex-col max-w-[330px] section_color shadow-lg py-2 px-1 rounded-xl hover:scale-105 duration-500">
                <div className="w-full h-[200px]">
                  <img
                    src={url}
                    alt="Projects Nameplate"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 mx-2 my-4">
                  <p className="text-xl font-bold">{title}</p>
                  <p className="text-base font-semibold primary_text">{tech}</p>
                  <p className=" text-sm">{desc}</p>

                  {/*Live & Github Button div */}
                  <div className="mt-3 flex items-center gap-6">
                    {/* <p className="font-thin">Project link :</p> */}
                    <a href={github} className="btnn_sm primary_bg">
                      GitHub
                    </a>
                    <a href={live} className="btnn_sm danger_bg">
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>

    </section>
  );
};

export default Projects