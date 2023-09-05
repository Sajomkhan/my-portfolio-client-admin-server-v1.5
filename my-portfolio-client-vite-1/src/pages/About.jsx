import heroImage from "../assets/heroImage/saiful.jpg";
import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";
import { about } from "../data/data";

const About = () => {
  return (
    <section id="About">
      <h2 className="text-3xl font-bold text-center ">About Me</h2>
      <div className="w-full mt-8 lg:mt-10 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">

        {/* -----------------------Image------------------------- */}
        <div className="p-3 w-72 section_color items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
          <img
            alt="profile"
            className="w-full h-60 md:h-80 rounded-2xl object-cover lg:grayscale hover:grayscale-0 transition-all bg-violet-100"
            src={heroImage}
          />
        </div>

        {/* ----------------------Text Div--------------------- */}
        <div className="min-w-sm md:w-[500px] xl:w-full flex-1 mx-4 my-6 flex flex-col gap-2.5 text-center lg:text-left items-center lg:items-start text-sm md:text-base">
          <p className="text-3xl font-semibold">{about.name}</p>
          <p className="font-bold ">{about.education}</p>
          <p className="primary_border font-bold w-fit rounded py-2 px-3 text-sm ">
            {about.positon}
          </p>
          <div className="my-2">
            <p>Cell: {about.phone}</p>
            <p>Email: {about.email}</p>
            <p>{about.address}</p>
          </div>
          <p className="text-sm text-justify md:text-base my-2">{about.desc}</p>
          <p className="text-sm text-justify md:text-base my-2">
            {about.desc2}
          </p>

          {/* -------------------Button---------------------- */}
          <div className="flex items-center gap-4 md:mt-4">
            <a
              href={about.cv_url} target="blank"
              className="flex items-center gap-1 btn_gradient py-2"
            >
              Resume
              <IoIosArrowForward />
            </a>
            <ScrollLink
              className=" btnn primary_text primary_border flex items-center gap-2 hover:bg-violet-50 transition-colors rounded-md"
              to={"Projects"}
              offset={-80}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              View Works
              <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
