import { useScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useScrollReveal();

  return (
    <>
      <div className="ambient-glow-wrapper" aria-hidden="true">
        <div className="ambient-glow ambient-glow--1" />
        <div className="ambient-glow ambient-glow--2" />
        <div className="ambient-glow ambient-glow--3" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
