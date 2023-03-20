import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@/styles/components/Experience.module.scss";
import Accordion from "./Accordion";

const JOB_EXPERIENCES = [
  {
    id: 1,
    position: "Front-End Developer",
    company: "Incenter Solutions",
    dateAttended: "Oct 2020 – Nov 2022",
    description:
      "As Incenters' parent company, Finance of America Companies entrusts me with the crucial responsibility of overseeing 40+ websites, including those for FOA clients across various regions of the USA. I work closely with designers and shareholders to bring new websites, pages, and features to life. We create bespoke websites using WordPress as our ecosystem and integrating Gulp, CSS Preprocessors, Lando, Webpack, and GitHub version control system to ensure streamlined management and tracking of code modifications.",
  },
  {
    id: 2,
    position: "Front-End Developer",
    company: "Bigcat Software Solutions",
    dateAttended: "May 2018 – Jul 2020",
    description:
      "Bigcat Software Solutions combines aspects of both my initial and subsequent employment. As a company committed to excellence, they provided me with diverse projects, including developing websites from scratch and utilizing CMS platforms. Leveraging my experience as a senior web developer, I was responsible for managing various tasks, such as single-page development for events, WordPress upkeep, website redesigns, front-end scripting, website optimization, and numerous others.",
  },
  {
    id: 3,
    position: "Lead Web Developer",
    company: "Xibre Digital",
    dateAttended: "Jul 2016 – May 2018",
    description:
      "By creating visually stunning and fully functional websites via content management systems, I came to realize that in a rapidly expanding industry like web development, efficiency equates to increased profitability. Throughout my tenure, I successfully managed the development of more than 36 websites.",
  },
  {
    id: 4,
    position: "Junior Web Developer",
    company: "Innov8tive Design & Development",
    dateAttended: "Jul 2015 – Jul 2016",
    description:
      "Through their guidance, I acquired the necessary skills to thrive in my career, managing diverse projects spanning web development, systems administration, and beyond. My time with them facilitated my growth and maturation within the profession.",
  },
];

const SkillsDivVariant = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },
};

const Experience = () => {
  const [openKey, setOpenKey] = useState();

  const toggleOpenHandler = (event) => {
    setOpenKey(event);
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  const experienceWidth = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0%", "100%"]
  );
  const showExperience = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "0%"]
  );

  return (
    <motion.section ref={targetRef} className={styled.profile}>
      <motion.div
        className="workContainer"
        style={{ position, top: showExperience }}
      >
        <motion.div className="textContainer">
          <motion.span className="backdrop">WORKS</motion.span>
          <motion.div
            variants={SkillsDivVariant}
            initial="hidden"
            whileInView="visible"
          >
            {JOB_EXPERIENCES.map((job, index) => (
              <Accordion
                key={job.id}
                id={job.id}
                defaultExpanded={index === 0 ? true : false}
                position={job.position}
                company={job.company}
                dateAttended={job.dateAttended}
                description={job.description}
                open={openKey}
                toggleOpen={toggleOpenHandler}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
