import { motion } from "framer-motion";
import styled from "@/styles/sections/Hero.module.scss";

const heroVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};

const heroChildVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 75,
    },
  },
};

const heroCtaVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      className={`heroSection ${styled.hero}`}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="heroTexts" variants={heroChildVariants}>
        <h1 className="title">
          I turn pixels into code, <span>one line at a time.</span>
        </h1>
        <p>
          With a passion for creating user-friendly
          <br /> experiences with the perfect blend
          <br /> of design and technology.
        </p>
      </motion.div>
      <motion.div className="heroCta" variants={heroCtaVariants}>
        <motion.a
          href="#!"
          className="button with-bg knowMore"
          whileHover=""
        >
          Know More About Me
        </motion.a>
        <span>or</span>
        <a href="#!" className="button viewProjects">
          View My Projects
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
