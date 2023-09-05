"use client";
import { IoIosArrowForward } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

const AboutButton = () => {
  return (
    <div>
      <ScrollLink
        className=" btn primary_bg w-fit flex flex-row items-center gap-2 py-2 px-3 "
        to={"About"}
        offset={-80}
        smooth={true}
        duration={500}
        isDynamic={true}
      >
        About Me
        <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
      </ScrollLink>
    </div>
  );
};

export default AboutButton;
