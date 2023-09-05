import "./App.css";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SocialMedia from "./components/SocialMedia";
import Experience from "./pages/experience/Experience";

function App() {
  return (
    <div className="w-ful min-h-screen">
      <div className="flex flex-col">
        <Navbar />
        <div className="container flex flex-col mt-16">
          {/* <SocialMedia /> */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
