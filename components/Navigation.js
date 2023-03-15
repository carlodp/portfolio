//import styled from "styled-components";
import { motion } from "framer-motion";
import styles from "@/styles/components/Navigation.module.scss";
import ThemeSwitcher from "./ThemeSwitcher";

const navVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.1,
      opacity: {
        duration: 0.3,
        ease: "easeIn",
      },
      y: {
        duration: 1,
        type: "spring",
        stiffness: 120,
      },
    },
  },
};

const navLinkVariant = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 75,
    },
  },
};

const Navigation = () => {
  return (
    <motion.nav
      className={`nav ${styles.nav}`}
      variants={navVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.a href="#!" variants={navLinkVariant}>
        <span className="normal">Profile</span>
        <span className="hover">Profile</span>
      </motion.a>
      <motion.a href="#!" variants={navLinkVariant}>
        <span className="normal">Projects</span>
        <span className="hover">Projects</span>
      </motion.a>
      <motion.a href="#!" variants={navLinkVariant}>
        <span className="normal">Contact</span>
        <span className="hover">Contact</span>
      </motion.a>
      <motion.div variants={navLinkVariant}>
        <ThemeSwitcher />
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
