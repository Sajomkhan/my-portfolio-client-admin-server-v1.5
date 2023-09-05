
import Image from "next/image";
import Link from "next/link";
import heroImage from "public/heroImage.jpg";
import { BiLinkExternal } from "react-icons/bi";

const About = () => {
  return (
    <section
      id="About"
      className="w-full text-2xl section_color py-10 lg:py-16">
      <h2 className="text-3xl font-bold text-center my-6 ">About Me</h2>

      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-12 lg:mt-14 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56  lg:w-72 section_color items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
          <Image
            alt="profile"
            width={1000}
            height={1000}
            loading={"lazy"}
            className="w-full h-60 md:h-80 rounded-2xl object-cover lg:grayscale hover:grayscale-0 transition-all bg-violet-100"
            src={heroImage}
          />
        </div>

        <div className="flex-1 mx-4 my-6 flex flex-col gap-2.5 text-center lg:text-left items-center lg:items-start">
          <p className="text-3xl font-semibold">Saiful Ajom Khan</p>
          <p className="font-bold text-sm ">Education: B.Sc. Engineer (EEE)</p>
          <p className="primary_border font-bold w-fit rounded py-2 px-3 text-sm ">
            Full Stack Developer (MERN Stack)
          </p>
          <p className="text-sm text-justify md:text-base my-2">
            I am a Full-Stack developer based in Pune, India. I'm an Information
            Technology undergraduate from SPPU, and my journey in web
            development began during my first year of college. I'm passionate
            about creating beautiful, functional, and user-friendly websites and
            applications, and I'm constantly pushing myself to learn and grow as
            a developer. Love building full-stack clones and side projects.
          </p>
          <div className="flex items-center gap-4 md:mt-4">
            {"resumeUrl".trim() && (
              <Link
                href={
                  "https://drive.google.com/file/d/1oJcpK_D97rS5u5OAq6qAI1QIsrTjuUnu/view?usp=sharing"
                }
                target="_blank"
                className="btn primary_bg">
                Resume
              </Link>
            )}
            {"callUrl".trim() && (
              <Link
                href={"callUrl"}
                target="_blank"
                className=" btn primary font-bold flex items-center gap-2 hover:bg-violet-50 transition-colors rounded-md">
                Book a 1:1 call <BiLinkExternal />{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
