import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Projects from "@/components/sections/Projects";
import SkillsExperience from "@/components/sections/SkillsExperience";
import Header from "../components/sections/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Profile/>
        <SkillsExperience/>
        <Projects/>
      </main>
      <Footer />
    </>
  );
}
