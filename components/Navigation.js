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
      delayChildren: 0.6, // this will set a delay before the children start animating
      staggerChildren: 0.1,
      opacity: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
};

const navLinkVariant = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        duration: 0.4,
      },
      y: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.5,
      }
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
      </motion.a>
      <motion.a href="#!" variants={navLinkVariant}>
        <span className="normal">Projects</span>
      </motion.a>
      <motion.a href="#!" variants={navLinkVariant}>
        <span className="normal">Contact</span>
      </motion.a>
      <motion.div variants={navLinkVariant}>
        <ThemeSwitcher />
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
