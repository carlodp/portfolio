import { motion } from "framer-motion";
import { useState } from "react";
import styled from "@/styles/reusable/ButtonLink.module.scss";

const ButtonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: (props) => ({
    opacity: 1,
    transition: {
      delay: props.delay ? props.delay : 0,
      duration: props.duration ? props.duration : 1,
    },
  }),
};

const underlineVariant = {
  initial: {
    width: "100%",
  },
  animate: (props) => ({
    width: "50%",
    transition: {
      delay: props.delay ? props.delay : 0,
      duration: props.duration ? props.duration : 1,
    },
  }),
};

const ButtonLink = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`${styled.buttonLink} ${props.className}`}>
      <motion.a
        href={props.href}
        className={`${hovered && "hover"}`}
        variants={ButtonVariants}
        initial="hidden"
        whileInView="visible"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered("")}
        custom={props}
      >
        {props.title}
        <motion.span
          className="underline"
          variants={underlineVariant}
          initial="initial"
          animate="animate"
          custom={props}
        ></motion.span>
      </motion.a>
    </div>
  );
};
export default ButtonLink;
