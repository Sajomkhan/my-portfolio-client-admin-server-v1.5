import { MdSchool, MdWork } from "react-icons/md";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="w-full text-2xl flex flex-col items-center section_color p-3 lg:p-12 py-16">
      <h1 className="mb-12 font-bold">Education and Expreriances</h1>
      {/* Education */}
      <EducationCard />
      <ExperienceCard />
    </section>
  );
};

export default Experience;
