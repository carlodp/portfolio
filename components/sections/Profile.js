import styled from "@/styles/sections/Profile.module.scss";
import SectionHeader from "../SectionHeader";

const Profile = () => {
  return (
    <section className={styled.profile}>
      <SectionHeader title="About Me" position="left" number="01." />
      <SectionHeader title="Works" position="right" number="02." />
    </section>
  );
};

export default Profile;
