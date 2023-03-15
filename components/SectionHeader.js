import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const headerWrapVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0,
    },
  },
};

const headerLeftVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const headerRightVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const headerLines = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const preTitle = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.1,
    },
  },
};

const SectionHeader = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      animation.start("visible");
    }
  }, [isInView, animation]);

  return (
    <motion.div
      className={`sectionHeader ${props.position}`}
      ref={ref}
      variants={headerWrapVariant}
      initial="hidden"
      animate={animation}
    >
      <motion.span className="preTitle" variants={preTitle}>
        {props.number}
      </motion.span>
      {props.position === "left" && (
        <>
          <motion.h2 variants={headerLeftVariant}>{props.title}</motion.h2>
          <div className="headerLine">
            <motion.span variants={headerLines}></motion.span>
          </div>
        </>
      )}
      {props.position === "right" && (
        <>
          <div className="headerLine">
            <motion.span variants={headerLines}></motion.span>
          </div>
          <motion.h2 variants={headerRightVariant}>{props.title}</motion.h2>
        </>
      )}
    </motion.div>
  );
};

export default SectionHeader;
