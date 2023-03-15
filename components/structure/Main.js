import Hero from "@/components/sections/Hero";
import styled from "@/styles/structure/Main.module.scss";
import Profile from "../sections/Profile";
import Projects from "../sections/Projects";

const Main = () => {
  return (
    <main className={styled.main}>
      <Hero />
      <Profile />
      <Projects />
    </main>
  );
};

export default Main;
