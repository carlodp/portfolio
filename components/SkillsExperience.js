import styled from "@/styles/components/SkillsExperience.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Accordion from "./Accordion";
import AccordionList from "./AccordionList";
import SectionHeader from "./SectionHeader";
import Stack from "./Stack";

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

const SKILLS = [
  {
    title: "Languages",
    skills: [
      "Javascript (ES6)",
      "TypeScript",
      "HTML",
      "CSS",
      "PHP",
      "SQL",
      "PHP",
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "React",
      "Next.js",
      "Bootstrap",
      "Vue.js",
      "Nuxt.js",
      "Gatsby",
      "WordPress",
      "Node",
    ],
  },
  {
    title: "Tools",
    skills: [
      "GitHub",
      "LESS",
      "SASS",
      "Gulp",
      "NPM",
      "Postman",
      "Chrome DevTools",
      "Docker & Lando",
      "MongoDB",
      "W3C",
    ],
  },
  {
    title: "Design ",
    skills: [
      "Adobe Creative Suite",
      "UI/UX",
      "Figma",
      "Adobe XD",
      "Prototyping",
      "Wireframing",
      "User Testing",
    ],
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

const SkillsExperience = () => {
  const [openKey, setOpenKey] = useState();

  const toggleOpenHandler = (event) => {
    setOpenKey(event);
  };

  return (
    <div className={styled.skillsExperience}>
      <div className="row">
        <div className="column">
          <SectionHeader title="Experience." position="left" number="02." />
          <motion.div
            className="experienceColumn"
            variants={SkillsDivVariant}
            initial="hidden"
            whileInView="visible"
            onDirectionLock={axis => console.log(axis)}
            viewport={{ once: true }}
          >
            <p className="introText">
              I&apos;ve worked on a handful of web projects over the past 8
              years, some of which were for the following organizations:
            </p>
            <AccordionList id="jobExperiences">
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
            </AccordionList>
          </motion.div>
        </div>
        <div className="column">
          <SectionHeader title="Skills." position="left" number="03." />
          <motion.div
            className="skillsColumn"
            variants={SkillsDivVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="skills">
              <p className="introText">
                Throughout my career, I&apos;ve amassed extensive experience and
                gained numerous skills. Although here are some, I&apos;m always
                eager to attain more.
              </p>
              <div className="skillStack">
                {SKILLS.map((event) => (
                  <Stack key={event.title} stack={event} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bottom">
        <a href="#!" className="button with-bg">
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default SkillsExperience;
