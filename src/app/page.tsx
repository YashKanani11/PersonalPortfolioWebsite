import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Expreince";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import SoftSkills from "./components/SoftSkills";

export default function HomePage() {
  return (
    <main className="bg-surface text-emphasis font-sans">
      <Nav />
      <HeroSection />
      <Skills />
      {/* <SoftSkills /> */}
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Footer />
    </main>
  );
}
