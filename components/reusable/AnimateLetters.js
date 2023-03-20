import styled from "@/styles/AnimateLetters.module.scss";
import { motion, useAnimate, useAnimationControls } from "framer-motion";

const AnimateLettersDiv = {
  hidden: {
    opacity: 0,
  },
  visible: (props) => ({
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: props.delay ? props.delay : 0,
      staggerChildren: props.stagger ? props.stagger : 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const AnimateLetter = {
  hidden: (props) => ({
    y: props.direction === "down" ? -100 : 100,
  }),
  visible: (props) => ({
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: props.duration ? props.duration / 2 : 1,
    },
  }),
};

const AnimateLetters = (props) => {
  const animate = useAnimationControls();


  return (
    <motion.span
      className={`${props.className} ${styled.letters}`}
      variants={AnimateLettersDiv}
      custom={props}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: props.repeat === 'true' ? false : true }}
    >
      {props.type === "letters" && (
        <>
          {[...props.title].map((letter, index) => (
            <motion.span
              key={letter + index}
              className="letter"
              variants={AnimateLetter}
              custom={props}
            >
              {letter}
            </motion.span>
          ))}
        </>
      )}

      {props.type === "sentence" && (
        <motion.span
          className="sentence"
          variants={AnimateLetter}
          custom={props}
        >
          {props.title}
        </motion.span>
      )}

      {props.type === 'words' && (
        <>
        
        {[...props.title.split(' ')].map((letter, index) => (
          <motion.span
            key={letter + index}
            className="words"
            variants={AnimateLetter}
            custom={props}
          >
            {letter}
          </motion.span>
        ))}
      </>
      )}
    </motion.span>
  );
};

export default AnimateLetters;
