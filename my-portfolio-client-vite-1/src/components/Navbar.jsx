import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { useThemeContext } from "./../context/hooks/useThemeContext";
import { FiMoreVertical, FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

const navLinks = ["Home", "About", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [manubar, setManubar] = useState(false);

  const { toggle, mode } = useThemeContext();

  const handleManubarToggle = () => setManubar(!manubar);

  return (
    <navbar
      className={`fixed top-0 left-0 w-full z-50 p-2 theme ${mode} shadow-md`}
    >
      <div className="container px-4 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          {/* ---------Logo------------ */}
          <a href="/" className="text-2xl font-semibold primary_text">
            Portfolio
          </a>

          {/* ---------Theme Dark & Light mode------------ */}
          <div
            onClick={toggle}
            className="py-3 px-3 hover:success rounded-full cursor-pointer flex justify-center items-center "
          >
            {mode === "dark" ? (
              <FiSun className="text-lg" />
            ) : (
              <FiMoon className="text-lg" />
            )}
          </div>
        </div>

        {/* -------------Navbar----------------- */}
        <nav className="hidden lg:flex flex-row gap-4 lx-gap-6 items-center">
          {navLinks.map((navLink, index) => (
            <ScrollLink
              key={index}
              className="text-[16px] hover:underline hover:text-cyan-600 hover:cursor-pointer"
              to={navLink}
              offset={-80}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              {navLink}
            </ScrollLink>
          ))}
        </nav>
        <div
          className="lg:hidden py-3 px-3 cursor-pointer"
          onClick={handleManubarToggle}
        >
          {!manubar ? <FiMoreVertical /> : ""}
        </div>


        {/* -------------------  Mobile Manubar  --------------------- */}
        {manubar && (
          <div onClick={handleManubarToggle} className="absolute top-0 left-0 w-full h-screen">
            <nav
              onClick={(e) => {e.stopPropagation()}}
              className={
                !manubar
                  ? "hidden"
                  : `absolute top-0 left-0 w-3/5 ${mode} flex flex-col items-center px-6 pb-7`
              }
            >
              <div className="self-end p-6 text-lg" onClick={handleManubarToggle}>
                <FaTimes />
              </div>

              <div className="w-full flex flex-col py-1">
                {navLinks.map((navLink, index) => (
                  <ScrollLink
                  onClick={handleManubarToggle}
                    key={index}
                    className=" hover:text-cyan-600 text-lg w-full text-center border-y-2 border-gray-400/20 py-3"
                    to={navLink}
                    offset={-80}
                    smooth={true}
                    duration={500}
                    isDynamic={true}
                  >
                    {navLink}
                  </ScrollLink>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </navbar>
  );
};

export default Navbar;
