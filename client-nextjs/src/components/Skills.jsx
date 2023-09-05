import Image from "next/image";
import { skills } from "@/data";

const Skills = () => {
  return (
    <section id="Home" className="w-full text-2xl section_color p-8 lg:p-12">
      <h1 className="text-center text-3xl font-bold mb-8">Tech Stack</h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2">
            <div
              title={"React.js"}
              className={
                "h-20 w-20 p-4 md:h-28 md:w-28 rounded-full flex items-center justify-center"
              }>
              <Image
                alt="skill"
                width={300}
                height={300}
                className="w-18 h-18 p-2 object-cover rounded-md bg-gray-100 shadow-lg"
                src={skill.image}
              />
            </div>
            <p className="text-sm md:text-base">{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
