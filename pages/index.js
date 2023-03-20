import About from "@/components/sections/About";
import Experience from "@/components/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

import Projects from "@/components/sections/Projects";
import SkillsExperience from "@/components/sections/SkillsExperience";
import Header from "../components/sections/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <About/>
        <Experience/>
        {/* <SkillsExperience/> */}
        {/* <Projects/> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
