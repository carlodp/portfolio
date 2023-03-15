import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import styled from "@/styles/sections/Profile.module.scss";
import SectionHeader from "../SectionHeader";

const aboutDivVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5, // this will set a delay before the children start animating
      staggerChildren: 0.1,
    },
  },
};

const aboutTextVariant = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const aboutImgVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Profile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  return (
    <section className={styled.profile}>
      <SectionHeader title="About" position="left" number="01." />
      <motion.div
        className="aboutMe"
        ref={ref}
        variants={aboutDivVariant}
        initial="hidden"
        animate={animation}
      >
        <motion.div className="text" variants={aboutTextVariant}>
          <p>
            As an 8-year front-end developer, I&apos;m driven to craft stunning,
            responsive, and user-friendly websites and applications through the
            utilization of cutting-edge technologies and industry best
            practices. I&apos;ve tackled various projects for clients of all sizes,
            delivering exceptional solutions that meet and exceed their
            expectations.
          </p>
          <p>
            My expertise lies in HTML, CSS, JavaScript, React, Angular, Vue, and
            web design tools such as Photoshop, Sketch, and Figma. I&apos;m
            continuously upskilling and staying up-to-date with the latest web
            development trends. I&apos;m a team player who collaborates seamlessly
            with other developers, designers, and stakeholders. I&apos;m also a
            self-starter who thrives on independent creative problem-solving.
          </p>
          <a href="#!" className="button with-bg">
            View My Projects
          </a>
        </motion.div>
        <motion.div className="image" variants={aboutImgVariant}>
          <Image
            src="/profile-image.JPG"
            alt="Carlo Santos"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
      <SectionHeader title="Skills" position="right" number="02." />
      <SectionHeader title="Expertise" position="left" number="03." />
    </section>
  );
};

export default Profile;
