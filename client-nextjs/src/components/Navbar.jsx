"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FiSun, FiMoon, FiMoreVertical } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";
import { useThemeContext } from "@/context/hooks/useThemeContext";

const navLinks = ["Home", "About", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { toggle, mode } = useThemeContext();

  const handleClick = () => setNav(!nav);

  return (
    <navbar className={`fixed z-30 w-full shadow-md theme ${mode}`}>
      <div className="container flex justify-between h-[55px] items-center ">
        <div className="flex flex-row gap-12 px-3 ">
          {/* -----------Logo------------- */}
          <Link
            href={"/"}
            className="text-2xl font-bold cursor-pointer text-[var(--primary)] hover:text-cyan-600"
          >
            Portfolio
          </Link>

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

        {/* ---------nav------------ */}

        <nav className="hidden lg:flex flex-row gap-4 lx-gap-6 items-center">
          {navLinks.map((navLink, index) => (
            <ScrollLink
              key={index}
              className="hover:underline hover:text-cyan-600"
              to={navLink}
              offset={-80}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              {navLink}
            </ScrollLink>
          ))}

          <Link
            href="/dashboard/projects"
            className="p-2 text-lg  hover:text-cyan-600"
          >
            <RxDashboard />
          </Link>
        </nav>

        <div
          className="lg:hidden py-3 px-3 cursor-pointer"
          onClick={handleClick}
        >
          {!nav ? <FiMoreVertical /> : ""}
        </div>

        {/* -------------------  Mobile Manubar  --------------------- */}

        {nav && (
          <nav
            className={
              !nav
                ? "hidden"
                : `absolute top-0 left-0 w-3/5 h-screen ${mode} flex flex-col items-center gap-6 py-5 px-6 `
            }
          >
            <div className="self-end p-6 text-lg" onClick={handleClick}>
              <FaTimes />
            </div>

            <div className="w-full flex flex-col gap-6">
              {navLinks.map((navLink, index) => (
                <ScrollLink
                  key={index}
                  className="hover:underline hover:text-cyan-600 text-xl w-full text-center border-b-2 border-gray-400/20 p-3"
                  to={navLink}
                  offset={-80}
                  smooth={true}
                  duration={500}
                  isDynamic={true}
                >
                  {navLink}
                </ScrollLink>
              ))}
              <Link
                className="hover:underline hover:text-cyan-600 text-xl w-full text-center border-b-2 border-gray-400/20 p-3 flex items-center gap-3"
                href=""
              >
                <span><RxDashboard /></span> <span>Dashboard</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </navbar>
  );
};

export default Navbar;
