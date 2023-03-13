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
      staggerChildren: 0.5,
      opacity: {
        duration: 0.5,
        ease: "easeInOut",
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
      <motion.h1 className="title" variants={heroChildVariants}>
        I turn pixels into code, <span>one line at a time.</span>
      </motion.h1>
      <motion.p variants={heroChildVariants}>
        With a passion for creating user-friendly
        <br /> experiences with the perfect blend
        <br /> of design and technology.
      </motion.p>
    </motion.section>
  );
};

export default Hero;