import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@/styles/components/About.module.scss";

const Profile = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], //start of target(targetRef) - end of container (window) and vice versa
  });

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  const aboutWidth = useTransform(scrollYProgress, [0, 0.45], ["0vw", "100vw"]);
  const showText = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.45], [0, 1]);

  return (
    <motion.section ref={targetRef} className={styled.profile}>
      <motion.div
        className="aboutContainer"
        style={{ position, width: aboutWidth }}
      ></motion.div>
      <motion.div className="textContainer">
        <motion.div
          className="texts"
          style={{ opacity: showText, scale: textScale }}
        >
          <motion.p>
            As an eight-year software engineer, I&apos;m driven to craft
            stunning, responsive, and user-friendly websites and applications
            through the utilization of cutting-edge technologies and industry
            best practices. I&apos;ve tackled various projects for clients of
            all sizes, delivering exceptional solutions that meet and exceed
            their expectations.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Profile;
