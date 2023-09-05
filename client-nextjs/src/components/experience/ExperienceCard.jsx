import React from "react";
import { MdWork } from "react-icons/md";
import { experience } from "@/data";

const ExperienceCard = () => {
  return (
    <div className="relative w-full flex flex-col item-center justify-center mt-20 xl:mt-6 ">
      {/* Sketch Line & icons*/}
      <div className="hidden absolute z-20 lg:flex flex-col inset-0 items-center">
        <div className="btn primary_bg2 w-fit">Experiences</div>
        {experience.map((exp) => (
          <>
            <div className="w-px h-[140px] bg-gray-500/50 "></div>
            <div className="rounded-full p-4  primary_bg2 w-fit">
              <MdWork className=" text-lg" />
            </div>
          </>
        ))}
      </div>

      {/* for mobile sketch line */}
      <div className="lg:hidden flex btn primary_bg2 w-fit self-center">
        Experiences
      </div>

      {/* Experience  */}
      <div className="w-full flex flex-wrap justify-around gap-x-16 ">
        {experience.map((exper, index) => (
          <div
            key={index}
            className="w-[475px] text-sm section_color shadow-lg p-4 rounded-lg mt-[40px] xl:mt-[100px] ">
            <p className="text-lg font-bold primary">{exper.position}</p>
            <p className=" font-bold">
              {exper.company}
              <span className="font-light text-[12px]">| {exper.duration}</span>
            </p>
            <div className=" mt-2">Responsibilities:</div>

            {exper.responsibility.map((responsible, index) => (
              <div key={index} className="ml-2 flex flex-col font-light">
                <div className="flex mr-1">
                  <div className="w-2 h-2 rounded-full bg-gray-500/70 mr-2 mt-1.5"></div>
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
