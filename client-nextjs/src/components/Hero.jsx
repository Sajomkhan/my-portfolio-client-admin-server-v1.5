
"use client";
import Image from "next/image";
import wavingHand from "public/waving-hand.gif";
import heroImage from "public/heroImage.jpg";
import Typewriter from "typewriter-effect";
import { IoIosArrowForward } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section id="Home" className="w-full text-2xl section_color pt-4 lg:pt-32">
      <div className="py-8 lg:py-16 flex flex-col-reverse lg:flex-row justify-around gap-8 lg:gap-0 items-center">
        {/* text div */}
        <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 items-center lg:items-start">
          <div className="flex items-center gap-1">
            <Image
              unoptimized={true}
              alt="waving-hand"
              width={30}
              height={30}
              src={wavingHand}
            />
            <p className="text-lg md:text-xl mt-2 md:mt-1.5">Hey</p>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold relative">
            I&apos;m Saiful Ajom Khan
          </h1>
          <div className="flex flex-row items-start md:items-center gap-1.5 my-5">
            <h2 className="text-lg md:text-2xl">I am into</h2>
            <Typewriter
              options={{
                strings: ["Full Stack Development", "MERN Development"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                wrapperClassName: "primary text-lg md:text-2xl font-medium",
                // cursorClassName:
                //   "text-violet-700 dark:text-violet-600 text-lg md:text-2xl",
              }}
            />
          </div>

          <p className="text-center lg:text-left text-sm md:text-lg mb-6">
            I focus on developing user-friendly web applications that meet the
            client's requirements, with attention to detail, scalability, and
            performance.
          </p>

          <ScrollLink
            className=" btn primary_bg w-fit flex flex-row items-center gap-2 py-2 px-3 "
            to={"About"}
            offset={-80}
            smooth={true}
            duration={500}
            isDynamic={true}>
            About Me
            <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
          </ScrollLink>
        </div>

        {/* image div */}
        <div className="relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0">
          <div className="w-56 h-56 md:w-80 md:h-80 lg:-translate-x-16">
            <Image
              alt="avatar"
              width={1000}
              height={1000}
              className="rounded-full w-full h-full object-cover"
              src={heroImage}
            />
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
