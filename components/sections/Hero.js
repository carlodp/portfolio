import { motion } from "framer-motion";
import styled from "@/styles/sections/Hero.module.scss";
import AnimateLetters from "../reusable/AnimateLettersUp";
import ButtonLink from "../reusable/ButtonLink";

const heroTextDivVariants = {
  visible: {
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.5,
    },
  },
};

const heroTextVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const subTexts = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
      delay: 1.45,
      when: "afterChildren",
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
      delay: 2.5,
      ease: "easeOut",
    },
  },
};
const Hero = () => {
  return (
    <section className={`heroSection ${styled.hero}`}>
      <div className="heroTexts">
        <motion.h1
          className="heroTitle"
          variants={heroTextDivVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroTextVariants}>
            <AnimateLetters
              className="heroIntroText"
              title="I&nbsp;turn&nbsp;pixels&nbsp;to&nbsp;code,"
              duration="1"
              stagger="0.025"
              delay="0.3"
            />
          </motion.div>
          <motion.div variants={heroTextVariants}>
            <AnimateLetters
              className="heroIntroText"
              title="one&nbsp;line&nbsp;at&nbsp;a&nbsp;time."
              duration="1"
              stagger="0.025"
              delay="0.9"
            />
          </motion.div>
        </motion.h1>

        <div className="subTexts">
          <motion.p variants={subTexts} initial="hidden" animate="visible">
            A passion for creating user-friendly experience <br />
            with the perfect blend of design and technology.
          </motion.p>
        </div>

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
              initial="hidden"
              animate="visible"
              d="M29.5 1.5C-10 4 4.49998 46 4.49998 46C6.99998 53.5 16.4999 69 28.4999 69V66L33 69L28.5 72V69.5"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>

      <ButtonLink
        title="Know Me Better"
        href="#!"
        className="hero-button"
        delay="2.8"
        duration="1"
      />
    </section>
  );
};

export default Hero;
