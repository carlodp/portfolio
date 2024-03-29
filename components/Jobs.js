import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import styled from "@/styles/components/Jobs.module.scss";


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

function JobExperience(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1170px)" });

  //desktop scroll animations
  const x = useTransform(
    scrollYProgress,
    [0, 0.6],
    isTabletOrMobile ? [-50, 0] : [-260, -300]
  );
  const title1 = useTransform(scrollYProgress, [0, 0.6], [220, 260]);
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.6],
    isTabletOrMobile ? [-50, 0] : [260, 300]
  );
  const title2 = useTransform(scrollYProgress, [0, 0.6], [-220, -260]);
  const lineWidth = useTransform(scrollYProgress, [0.35, 0.6], ["0px", "25px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const lineProgressHeight = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    ["0%", "100%"]
  );

  //mobile scroll animations
  const mx = useTransform(scrollYProgress, [0, 0.6], [40, 0]);
  const mLineWidth = useTransform(scrollYProgress, [0, 1], ["0px", "25px"]);
  const mopacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const mlineProgressHeight = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    ["0%", "100%"]
  );

  return (
    <>
      {props.index % 2 === 0 ? (
        <motion.li
          ref={ref}
          className={`${isTabletOrMobile ? "mobile" : ""} ${
            styled.jobExperience
          }`}
          id={`job${props.id}`}
        >
          <motion.span
            className="lineProgress"
            style={{ height: lineProgressHeight }}
          ></motion.span>
          <motion.span
            className="lineGoing"
            style={{ width: lineWidth }}
          ></motion.span>
          <motion.div className="jobInformation" style={{ opacity, x }}>
            <div className="jobHeader">
              <h3>{props.company}</h3>
              <span>{props.dateAttended}</span>
            </div>
            <div className="jobDetails">{props.description}</div>
          </motion.div>
            <motion.div className="jobTitle">
              <motion.div className="title" style={{ opacity, x: title1 }}>
                {props.position}
              </motion.div>
            </motion.div>
        </motion.li>
      ) : (
        <motion.li
          ref={ref}
          className={`${isTabletOrMobile ? "mobile" : ""} ${
            styled.jobExperience
          }`}
          id={`job${props.id}`}
        >
          <motion.span
            className="lineProgress"
            style={{ height: lineProgressHeight }}
          ></motion.span>
          <motion.span
            className="lineGoing"
            style={{ width: lineWidth }}
          ></motion.span>
          <motion.div className="jobInformation" style={{ opacity, x: x2 }}>
            <div className="jobHeader">
              <h3>{props.company}</h3>
              <span>{props.dateAttended}</span>
            </div>
            <div className="jobDetails">{props.description}</div>
          </motion.div>
          <motion.div className="jobTitle">
            <motion.div className="title" style={{ opacity, x: title2 }}>
              {props.position}
            </motion.div>
          </motion.div>
        </motion.li>
      )}
    </>
  );
}

const Jobs = () => {
  return (
    <motion.ul className={styled.jobs}>
      {JOB_EXPERIENCES.map((job, index) => (
        <JobExperience
          index={index}
          key={job.id + index}
          id={job.id}
          company={job.company}
          dateAttended={job.dateAttended}
          description={job.description}
          position={job.position}
        />
      ))}
    </motion.ul>
  );
};

export default Jobs;
