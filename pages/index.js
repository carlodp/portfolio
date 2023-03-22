import Cursor from "@/components/Cursor";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Header from "../components/sections/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero id="hero"/>
        <About id="about"/>
        <Experience id="experience"/>
        <Skills id="skills"/>
        <Projects id="projects"/>
      </main>
      <Footer />
    </>
  );
}
