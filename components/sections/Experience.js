import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@/styles/sections/Experience.module.scss";

const JOB_EXPERIENCES = [
  {
    id: 1,
    position: "Front-End Developer",
    company: "Incenter",
    dateAttended: "Oct 2020 – Nov 2022",
    description:
      "As Incenters' parent company, Finance of America Companies entrusts me with the crucial responsibility of overseeing 40+ websites, including those for FOA clients across various regions of the USA. I work closely with designers and shareholders to bring new websites, pages, and features to life. We create bespoke websites using WordPress as our ecosystem and integrating Gulp, CSS Preprocessors, Lando, Webpack, and GitHub version control system to ensure streamlined management and tracking of code modifications.",
  },
  {
    id: 2,
    position: "Front-End Developer",
    company: "Bigcat",
    dateAttended: "May 2018 – Jul 2020",
    description:
      "Bigcat Software Solutions combines aspects of both my initial and subsequent employment. As a company committed to excellence, they provided me with diverse projects, including developing websites from scratch and utilizing CMS platforms. Leveraging my experience as a senior web developer, I was responsible for managing various tasks, such as single-page development for events, WordPress upkeep, website redesigns, front-end scripting, website optimization, and numerous others.",
  },
  {
    id: 3,
    position: "Lead Web Developer",
    company: "Xibre",
    dateAttended: "Jul 2016 – May 2018",
    description:
      "By creating visually stunning and fully functional websites via content management systems, I came to realize that in a rapidly expanding industry like web development, efficiency equates to increased profitability. Throughout my tenure, I successfully managed the development of more than 36 websites.",
  },
  {
    id: 4,
    position: "Junior Web Developer",
    company: "IDD",
    dateAttended: "Jul 2015 – Jul 2016",
    description:
      "Through their guidance, I acquired the necessary skills to thrive in my career, managing diverse projects spanning web development, systems administration, and beyond. My time with them facilitated my growth and maturation within the profession.",
  },
];

const jobSingleVariants = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  visible: {
    opacity: 1,
    x: -340,
    transition: {
      duration: 0.5,
    },
  },
};

const jobSingleVariants2 = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  visible: {
    opacity: 1,
    x: 340,
    transition: {
      duration: 0.5,
    },
  },
};

const Experience = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  const showExperienceHeader = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["-80%", "0%"]
  );

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9],
    ["0%", "0%", "100%"]
  );

  return (
    <motion.section ref={targetRef} className={styled.experience}>
      <motion.div className="experienceContainer">
        <motion.div
          className="sectionHeader"
          style={{ y: showExperienceHeader }}
        >
          <div className="title">EXPERIENCE</div>
          <p className="subText">
            I’ve worked on a handful of web projects over the past 8 <br />
            years, some of which were for the following organizations:
          </p>
        </motion.div>
        <motion.div className="jobExperiences">
          <motion.span
            className="line"
            style={{ height: lineHeight }}
          ></motion.span>
          <motion.div className="jobs">
            {JOB_EXPERIENCES.map((job, index) => (
              <Fragment key={index}>
                {index % 2 === 0 ? (
                  <motion.div
                    key={job.id + index}
                    className="jobSingle odd"
                    id={`job${job.id}`}
                    variants={jobSingleVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <div className="jobHeader">
                      <h3>{job.company}</h3>
                      <span>{job.dateAttended}</span>
                      <span className="line2"></span>
                    </div>
                    <div className="jobDetails">{job.description}</div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={job.id + index}
                    className="jobSingle even"
                    id={`job${job.id}`}
                    variants={jobSingleVariants2}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <div className="jobHeader">
                      <h3>{job.company}</h3>
                      <span>{job.dateAttended}</span>
                      <span className="line2"></span>
                    </div>
                    <div className="jobDetails">{job.description}</div>
                  </motion.div>
                )}
              </Fragment>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
