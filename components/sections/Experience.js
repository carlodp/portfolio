import { motion } from "framer-motion";
import styled from "@/styles/sections/Experience.module.scss";
import Jobs from "../Jobs";

const Experience = ({ id }) => {
  return (
    <motion.section id={id} className={styled.experience}>
      <motion.div className="experienceContainer">
        <motion.div
          className="sectionHeader"
        >
          <h3 className="title">Experience</h3>
          <p className="subText">
            I’ve worked on a handful of web projects over the past 8 <br />
            years, some of which were for the following organizations:
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
