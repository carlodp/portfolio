import { motion } from "framer-motion";
import styled from "@/styles/sections/Hero.module.scss";

const heroVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 1,
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

const heroCtaDivVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.1,
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
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const arrowPaths = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 0.6,
      delay: 1,
      ease: "easeOut",
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

        <motion.div className="arrow">
          <svg
            width="35"
            height="74"
            viewBox="0 0 35 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={arrowPaths}
              d="M29.5 1.5C-10 4 4.49998 46 4.49998 46C6.99998 53.5 16.4999 69 28.4999 69V66L33 69L28.5 72V69.5"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </motion.div>
      </motion.div>
      <motion.div className="heroCta" variants={heroCtaDivVariant}>
        <motion.a href="#!" className="button with-bg knowMore" variants={heroCtaVariants}>
          Know More About Me
        </motion.a>
        <motion.span variants={heroCtaVariants}>or</motion.span>
        <motion.a href="#!" className="button viewProjects" variants={heroCtaVariants}>
          View My Projects
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
