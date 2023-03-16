import styled from "@/styles/sections/Profile.module.scss";
import About from "../About";
import SkillsExperience from "../SkillsExperience";

const Profile = () => {
  return (
    <>
      <section className={styled.profile}>
        <About />
      </section>

      <section className={styled.profile}>
        <SkillsExperience />
      </section>
    </>
  );
};

export default Profile;
