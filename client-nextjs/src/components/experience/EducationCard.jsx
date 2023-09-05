import React from "react";
import { MdSchool } from "react-icons/md";

const EducationCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="btn primary_bg2 w-fit">Education</div>
      <div className="w-px h-[30px] bg-gray-500/50 "></div>
      <div className="rounded-full p-4  primary_bg2 w-fit">
        <MdSchool className=" text-lg" />
      </div>
      <div className="w-px h-[30px] bg-gray-500/50 "></div>
      <div className="max-w-[575px] text-sm section_color shadow-lg p-4 mb-12 rounded-lg text-center">
        <h1 className="text-lg font-bold mb-1 primary">
          B.Sc. Engineer | 2006-2010
        </h1>
        <h1 className="mb-1 font-light">
          The Institution of Engineers Bangladesh (IEB)
        </h1>
        <p className="">
          {" "}
          <b>Subject:</b> Electrical & Electronics (EEE)
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
