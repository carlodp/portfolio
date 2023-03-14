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
      console.log(isInView);
      animation.start("visible");
    }
  }, [isInView]);

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
          <a href="#!" className="button with-bg">
            Browse My Current Projects
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
    </section>
  );
};

export default Profile;
