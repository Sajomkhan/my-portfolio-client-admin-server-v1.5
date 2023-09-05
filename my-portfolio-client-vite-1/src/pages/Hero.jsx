import { hero } from "../data/data";
import { Link as ScrollLink } from "react-scroll";
import wavingHand from "../assets/others/waving-hand.gif";
import Typewriter from "typewriter-effect";
import { IoIosArrowForward } from "react-icons/io";
import HeroImage from "../components/HeroImage";
import SocialMedia from "../components/SocialMedia";

const Hero = () => {
  return (
    <section
      id="Home"
      className="flex flex-col lg:flex-row-reverse gap-x-20 gap-y-10 justify-center items-center lg:px-30"
    >
      {/* --------------Hero Image------------- */}
      <HeroImage />

      {/* --------------Text Div------------- */}
      <div className=" lg:max-w-lg flex-1 flex flex-col items-center gap-3 lg:items-start lg:mt-24 px-2">
        <div className="flex justify-center lg:justify-start items-center gap-1">
          <img src={wavingHand} alt="waving-hand" width={30} height={30} />
          <p className="text-lg md:text-xl mt-2 md:mt-1.5">Hey</p>
        </div>
        <h1 className="text-3xl md:text-5xl text-center lg:text-start font-bold relative">
          {hero.headline}
        </h1>

        <div className="flex flex-row justify-center lg:justify-start md:items-center gap-1.5 lg:my-5">
          <h2 className="text-lg md:text-2xl">{hero.skills_initiative}</h2>

          {/* --------------Type Writer Effect------------- */}
          <Typewriter
            options={{
              strings: hero.skills,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
              wrapperClassName: "primary_text text-lg md:text-2xl font-medium",
              // cursorClassName:
              //   "text-violet-700 dark:text-violet-600 text-lg md:text-2xl",
            }}
          />
        </div>

        <p className="text-justify lg:text-left md:text-lg mb-6 ">{hero.desc}</p>

        {/* --------------Social Media for Destop------------- */}
        <div className="hidden md:block fixed top-40 left-0 ">
          <SocialMedia />
        </div>
        {/*------------- Social Media for Mobile------------- */}
        <div className="md:hidden">
          <SocialMedia />
        </div>

        {/* ---------------Scroll Button------------- */}
        <ScrollLink
          className=" btn_gradient w-fit flex items-center gap-2 py-2 rounded-md mt-5"
          to={"Projects"}
          offset={-80}
          smooth={true}
          duration={500}
          isDynamic={true}
        >
          Show Works
          <IoIosArrowForward />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
