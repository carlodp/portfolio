import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@/styles/sections/Hero.module.scss";
import AnimateLetters from "../reusable/AnimateLetters";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [
      "end end",
      "end start",
    ],
  });

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  const arrowVariant = {
    hidden: {
      x: -200,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        delay: 1,
        ease: [0.6, 0.01, 0.05, 0.9],
      }
    }
  }

  return (
    <motion.section ref={targetRef} className={`heroSection ${styled.hero}`}>
      <motion.div className="heroTexts" style={{ position }}>
        <div className="topText">
          <motion.h1
            layoutId="splash-text"
            layout
            transition={{
              ease: [0.6, 0.01, 0.05, 0.9],
              duration: 1,
              delay: 0.25,
            }}
          >
            <span>CARLO</span>
            <span>SANTOS</span>
          </motion.h1>
          <h2><AnimateLetters type="words" title="— CREATIVE PORTFOLIO" duration="1" stagger="0.1" delay="0.5"/></h2>
        </div>
        <div className="bottomText">
          <h2><AnimateLetters type="words" title="— FRONT-END FOCUSED" duration="1" stagger="0.1" delay="0.5"/></h2>
          <h1>
            <span>
              <AnimateLetters
                title="SOFTWARE"
                type="letters"
                direction="down"
                duration="2"
                stagger="0.025"
                delay="0.5"
              />
            </span>
            <span>
              <AnimateLetters
                title="ENGINEER"
                type="letters"
                direction="up"
                duration="2"
                stagger="0.025"
                delay="0.5"
              />
            </span>
          </h1>
        </div>
        <motion.span className="scrollArrow" variants={arrowVariant} initial="hidden" animate="visible">
          <span className="arrow">
            <svg
              width="25"
              height="46"
              viewBox="0 0 25 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 33L22.7969 30.7969L14.0625 39.5156V0.96875H10.9375V39.5156L2.21875 30.7812L0 33L12.5 45.5L25 33Z"
                fill="black"
              />
            </svg>
          </span>
          SCROLL
        </motion.span>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
