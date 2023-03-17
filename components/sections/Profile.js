import styled from "@/styles/sections/Profile.module.scss";
import About from "../About";

const Profile = () => {
  return (
    <>
      <section className={styled.profile}>
        <About />
      </section>
    </>
  );
};

export default Profile;
