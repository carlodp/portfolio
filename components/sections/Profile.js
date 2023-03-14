import styled from "@/styles/sections/Profile.module.scss";
import SectionHeader from "../SectionHeader";
import image from "@/public/profile-image.JPG";

const Profile = () => {
  return (
    <section className={styled.profile}>
      <SectionHeader title="About Me." position="left" number="01." />
      <div className="aboutMe">
        <div className="text">
          <p>
            As a high‐performing, strategic‐thinking professional who has 8
            years of experience in the web development industry, I have
            developed different strategies to maintain high-quality service in
            the least amount of time possible.
          </p>
          <p>
            Driven by passion and the natural feeling of joy, doing the work
            that I love helps me push to further - making sure that I develop
            websites to perfection. Also, my willingness to learn new things as
            well as absorbing new knowledge inspires me to be better, making me
            confident in myself and the work that I do.
          </p>
          <a href="#!" className="button with-bg">Browse My Current Projects</a>
        </div>
        <div className="image">
          <img src={image.src} alt="Carlo Santos"/>
        </div>
      </div>
      <SectionHeader title="Skills." position="right" number="02." />
    </section>
  );
};

export default Profile;
