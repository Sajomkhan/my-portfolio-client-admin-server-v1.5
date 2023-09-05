import { MdWork } from "react-icons/md";
import { experiences } from "../../data/data";

const ExperienceCard = () => {
  return (
    <div className="relative w-full flex flex-col item-center justify-center mt-10 ">
      {/* --------------Sketch Line & icons--------------*/}
      <div className="hidden absolute xl:flex flex-col inset-0 items-center">
        <div className="primary_bg2 py-2 px-5 rounded-md hover:scale-105 duration-300">
          Experiences
        </div>
        {experiences.map((exp) => (
          <>
            <div className="w-px h-[130px] bg-gray-500/50 "></div>
            <div className="rounded-full p-4 primary_bg2 hover:scale-105 duration-500">
              <MdWork className=" text-lg" />
            </div>
          </>
        ))}
      </div>

      {/* --------------sketch line for mobile -------------- */}
      <div className="xl:hidden flex flex-col items-center">
        <div className="primary_bg2 py-2 px-5 rounded-md hover:scale-105 duration-500">
          Experiences
        </div>
        <div className="w-px h-[30px] bg-gray-500/50 "></div>
        <div className="self-center rounded-full p-4 primary_bg2 hover:scale-105 duration-500">
          <MdWork className=" text-lg" />
        </div>
        <div className="w-px h-[30px] bg-gray-500/50 "></div>
      </div>

      {/* ------------------Experience Card------------------  */}
      <div className="w-full flex flex-wrap justify-around gap-x-16 gap-y-10 xl:mt-16 px-4">
        {experiences.map((exper, index) => (
          <div
            key={index}
            className="z-20 flex flex-col gap-2 max-w-[430px] text-sm section_color shadow-lg p-4 rounded-lg xl:mt-[60px] hover:scale-105 duration-500"
          >
            <p className="lg:text-lg font-bold primary_text">{exper.position}</p>
            <p className=" font-bold">
              {exper.company}
              <span className="font-light text-[12px]"> | {exper.duration}</span>
            </p>
            <div className="mt-2 font-semibold ">My Proficiencies:</div>

            {exper.proficiencies.map((responsible, index) => (
              <div key={index} className="ml-2 flex flex-col my-2">
                <div className="flex mr-1">
                  <div className="w-4 h-4">
                    <div className="w-2 h-2 rounded-full bg-gray-500/70 mr-2 mt-1.5"></div>
                  </div>
                  <p>{responsible}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
