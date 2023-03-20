import { motion } from "framer-motion";
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
      delay: 0.5,
      duration: 0.5,
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
      delayChildren: 0.8,
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

const Skills = () => {
  return (
    <motion.section className={styles.skills}>
      <motion.div className="sectionHeader">
        <div className="title">
          <AnimateLetters
            direction="down"
            type="sentence"
            title="SKILLS"
            delay="0"
            duration="1"
            repeat="true"
          />
        </div>
        <AnimateLetters
          className="subText"
          direction="up"
          type="sentence"
          title="Throughout my career, I've amassed extensive experience and gained numerous skills. Although here are some, I'm always eager to attain more."
          delay="0"
          duration="1"
          repeat="true"
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
          >
            <motion.h3 className="stackTitle" variants={stackTitleVariant}>
              {event.title}
            </motion.h3>
            <motion.div
              className="skillsList"
              variants={skillsListVariant}
              initial="hidden"
              whileInView="visible"
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
    </motion.section>
  );
};

export default Skills;
