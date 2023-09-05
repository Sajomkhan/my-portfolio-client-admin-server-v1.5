"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/Skills";
import { useThemeContext } from "@/context/hooks/useThemeContext";
// import { useSelector } from "react-redux";

export default function page() {
  // const themeColor = useSelector((state) => state.theme.theme);
  const { mode } = useThemeContext;
  return (
    <div className={`flex flex-col w-full theme ${mode}`}>
      <Navbar />
      {/* <main className="container flex flex-col gap-y-5 mt-24"> */}
      <main className={`container flex flex-col`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
