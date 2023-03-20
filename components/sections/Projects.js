import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@/styles/sections/Projects.module.scss";

const PROJECT_LIST = [
  {
    id: "01",
    name: "Moviebase",
    stacks: ["React", "Next.js", "TMBD API"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "02",
    name: "Statify",
    stacks: ["Vue", "Vite", "Spotify API"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "03",
    name: "Lipsum",
    stacks: ["Next.js", "React", "TMBD API"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "04  ",
    name: "Lorem",
    stacks: ["Next.js", "React", "TMBD API"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], //start of target(targetRef) - end of container (window) and vice versa
  });

  const x = useTransform(scrollYProgress, [0, 0.78], ["0", "-65%"]);

  return (
    <motion.section ref={targetRef} className={styled.projects}>
      <motion.div className="projectsContainer">
        <motion.div className="projectsContent" style={{ x }}>
          <h2 className="sectionHeader">Projects</h2>
          <div className="projectsList">
            {PROJECT_LIST.map((project) => (
              <div className="projectSingle" key={project.id}>
                <span className="number">{project.id}.</span>
                <h3 className="name">{project.name}</h3>
                <span className="stacksUsed">
                  {project.stacks.map((stack) => (
                    <span key={stack}>{stack}</span>
                  ))}
                </span>
                <p className="description">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
