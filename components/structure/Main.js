import Hero from "@/components/sections/Hero";
import styled from "@/styles/structure/Main.module.scss";
import Profile from "../sections/Profile";

const Main = () => {
  return (
    <main className={styled.main}>
      <Hero />
      <Profile />
    </main>
  );
};

export default Main;
