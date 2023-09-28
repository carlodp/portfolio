import { motion } from "framer-motion";
import styled from "@/styles/sections/Footer.module.scss";
import ScrollToTop from "../ScrollToTop";

const FooterVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const FooterBottomVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className={`footerSection ${styled.footer}`}>
      <div className="footerContainer">
        <div className="asd"></div>
        <motion.div
          className="preFooter"
          variants={FooterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h6 className="title">Drop by and say</motion.h6>
          <motion.a href="mailto:hello@carlosantos.dev" className="email">
            hello<span>@carlosantos.dev</span>
          </motion.a>
        </motion.div>
        <motion.div
          className="bottomFooter"
          variants={FooterBottomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="copyright">
            ©2023 Carlo Santos. Made with <a href="https://nextjs.org/">Next.js</a> &{" "}
            <a href="https://www.framer.com/">Framer Motion</a>
          </p>
          <p className="location">
            <span className="locationIcon"></span>Based on Manila, Philippines
          </p>
        </motion.div>
      </div>

      <ScrollToTop />
    </footer>
  );
};

export default Footer;
