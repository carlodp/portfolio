import { motion } from "framer-motion";
import Jobs from "../Jobs";
import AnimateLetters from "../reusable/AnimateLetters";
import styled from "@/styles/sections/Experience.module.scss";

const Experience = ({ id }) => {
  return (
    <motion.section id={id} className={styled.experience}>
      <motion.div className="experienceContainer">
        <motion.div className="sectionHeader">
          <h3 className="title">
            <AnimateLetters
              direction="down"
              type="sentence"
              title="Experience"
              delay="0"
              duration="0.5"
            />
          </h3>
          <p className="subText">
            <AnimateLetters
              className="subText"
              direction="up"
              type="sentence"
              title="I&apos;ve worked on a handful of web projects over the past 8 years, some of which were for the following organizations:"
              delay="0"
              duration="1"
            />
          </p>
        </motion.div>
        <motion.div className="jobExperiences">
          <Jobs/>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
