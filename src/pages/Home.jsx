import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Highlights from "../components/Highlights";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
