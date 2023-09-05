// Skill Icons
import react from "../assets/icons/react.svg";
import nextjs from "../assets/icons/nextjs.svg";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript.svg";
import redux from "../assets/icons/redux.svg";
import nodejs from "../assets/icons/nodejs.svg";
import mongodb from "../assets/icons/mongodb.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import github from "../assets/icons/github.svg";
// Hero Image Import
import heroImage from "../assets/heroImage/saiful.jpg";

export const skills = [
  {
    position: "top-2 left-10 w-10 ",
    image: react,
  },
  {
    position: "top-14 right-0 w-8 ",
    image: javascript,
  },
  {
    position: "top-60 left-0 w-7 ",
    image: nextjs,
  },
  {
    position: "top-8 right-32 w-5 ",
    image: typescript,
  },
  {
    position: "top-50 left-2 w-5 ",
    image: redux,
  },
  {
    position: "-bottom-2 right-24 w-8 ",
    image: nodejs,
  },
  {
    position: "top-10 left-12 w-10 ",
    image: mongodb,
  },
  {
    position: "bottom-14 left-20 w-8 ",
    image: tailwindcss,
  },
  {
    position: "bottom-2 right-5 w-7 ",
    image: bootstrap,
  },
  {
    position: "top-64 -right-1 w-5  ",
    image: html,
  },
  {
    position: "top-60 right-2 w-5 ",
    image: css,
  },
  {
    position: "bottom-8 right-24 w-10 ",
    image: github,
  },
];

const HeroImage = () => {
  return (
      <div className="group w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] flex-1 flex justify-center items-center relative py-14">
        {/* --------------Hero Image---------------- */}
        <img
          className="w-60 h-60 lg:w-72 lg:h-72 rounded-full group-hover:scale-95 ease-in duration-500"
          src={heroImage}
          alt="Image"
        />

        {/* --------------- Skill Icons -------------------- */}

        {skills.map((skill, index) => {
          return (
            <img
              key={index}
              className={`absolute z-10 group-hover:rotate-45 ease-in duration-500  ${skill.position}`}
              src={skill.image}
              alt="Icon Image"
            />
          );
        })}
      </div>
  );
};

export default HeroImage;
