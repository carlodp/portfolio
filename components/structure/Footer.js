import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styled from "@/styles/structure/Footer.module.scss";

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
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("inview", isInView);
      animation.start("visible");
    }
  }, [isInView, animation]);

  return (
    <footer className={`footerSection ${styled.footer}`}>
      <motion.div
        className="preFooter"
        ref={ref}
        variants={FooterVariants}
        initial="hidden"
        animate={animation}
      >
        <motion.h6 className="title">Want to work together?</motion.h6>
        <motion.a href="mailto:hello@carlosantos.dev" className="email">
          hello@carlosantos.dev
        </motion.a>
      </motion.div>
      <motion.div
        className="bottomFooter"
        variants={FooterBottomVariants}
        ref={ref}
        initial="hidden"
        animate={animation}
      >
        <p className="copyright">
          ©2023 Carlo Santos. Made with <a href="#!">Next.js</a> &{" "}
          <a href="#!">Framer Motion</a>
        </p>
        <p className="location">
          <span className="locationIcon"></span>Based on Manila, Philippines
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
