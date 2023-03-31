import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/sections/Skills.module.scss";
import AnimateLetters from "../reusable/AnimateLetters";

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
    title: "Frameworks",
    skills: [
      "React",
      "Framer Motion",
      "Next.js",
      "Vite",
      "Bootstrap",
      "Tailwind CSS",
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
      "Rapid API",
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

const stackVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const stackTitleVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.25,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

const skillsListVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.3,
      staggerChildren: 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const skillVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

const Skills = ({id}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], //start of target(targetRef) - end of container (window) and vice versa
  });

  const y = useTransform(scrollYProgress, [0, 0.35], ['100%', '10%']);

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.section id={id} ref={targetRef} className={styles.skills}>
      <motion.div className="skillsContainer" style={{ position, top: y }}>
        <motion.div className="sectionHeader">
          <h3 className="title">
            <AnimateLetters
              direction="down"
              type="sentence"
              title="Skills"
              delay="0"
              duration="0.5"
            />
          </h3>
          <AnimateLetters
            className="subText"
            direction="up"
            type="sentence"
            title="Throughout my career, I've amassed extensive experience and gained numerous skills. Although here are some, I'm always eager to attain more."
            delay="0"
            duration="0.5"
          />
        </motion.div>
        <motion.div className="stackContainer">
          {SKILLS.map((event, index) => (
            <motion.div
              className="stack"
              key={event.title + index}
              variants={stackVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 className="stackTitle" variants={stackTitleVariant}>
                {event.title}
              </motion.h3>
              <motion.div
                className="skillsList"
                variants={skillsListVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {event.skills.map((skill, index) => (
                  <motion.span key={skill + index} variants={skillVariant}>
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
