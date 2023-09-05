import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="w-full flex flex-col items-center lg:px-12">
      <h2 className="mb-12 font-bold text-center">Education and Expreriances</h2>
      <EducationCard />
      <ExperienceCard />
    </section>
  );
};

export default Experience;
