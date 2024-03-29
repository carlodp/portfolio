import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import styled from "@/styles/sections/Projects.module.scss";

const PROJECT_LIST = [
  {
    id: "01",
    name: "Henyo",
    link: "https://henyo.vercel.app/",
    stacks: ["React", "OpenAI", "Prisma", "Tailwind CSS", "Clerk", "PlanetScale"],
    description:
      "Henyo is a SaaS AI platform project that utilizes OpenAI API, that has 5 main features, Conversation, Music Generation, Image Generation, Video Generation, and Code Generation",
  },
  {
    id: "02",
    name: "Spotti",
    link: "https://spotti.netlify.app/",
    stacks: ["React", "Vite", "Tailwind CSS", "Rapid API"],
    description:
      "Spotti is an online music library that utilizes Shazam's API, providing you with the ability to browse, search, and listen to sample music and artists.",
  },
  {
    id: "03",
    name: "SineMovie",
    link: "https://sinemovie.vercel.app/",
    stacks: ["Next.JS", "Prisma", "MongoDB", "NextAuth", "Tailwind CSS"],
    description:
      "SineMovie is a personal project of mine that was based on Netflix, I tried to use Next.js as the front-end and Prisma to connect the application to the MongoDB server. The website also utilizes Tailwind CSS for faster designing, which is really useful.",
  },
  {
    id: "04",
    name: "FOA",
    link: "https://www.financeofamerica.com/",
    stacks: ["WordPress", "PHP", "Javascript", "SASS"],
    description:
      "During my tenure with Finance of America, I was responsible for maintaining and adding new functionalities to their corporate website, which provides all the essential information about the company.",
  },
  {
    id: "05",
    name: "Lakbay",
    link: "#!",
    stacks: ["Next.JS", "Prisma", "Tailwind CSS"],
    description:
      "A web application that utilizes the normal functionality of Airbnb, icluding login, booking, payment, etc.",
  },
  {
    id: "06",
    name: "AniBase",
    link: "https://aniibase.netlify.app/",
    stacks: ["Vue.js 3", "Nuxt.JS", "Tailwind CSS", "Consumet API"],
    description:
      "A comprehensive database that has all the information you need to stay up-to-date on your favorite shows. Plus, we provide direct links to episodes so you can watch them right away. With AniBase, you'll never miss a beat in the world of anime!",
  },
  {
    id: "07",
    name: "CRMP Courses",
    link: "https://www.farwholesale.com/crmp/",
    stacks: ["Wordpress", "PHP", "Javascript", "SASS"],
    description:
      "As part of my responsibilities, I created a training website that provides customers with access to multiple courses for becoming certified mortgage professionals. The website was developed using WordPress as a content management system, and I also utilized PHP, Javascript, and SASS in the creation process.",
  },
];

const Projects = ({ id }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], //start of target(targetRef) - end of container (window) and vice versa
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1230px)" });

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    isTabletOrMobile ? [0, 0] : ["0%", "-73%"] //Increase value if adding projects
  );

  return (
    <motion.section id={id} ref={targetRef} className={styled.projects}>
      <motion.div className="projectsContainer">
        <motion.div className="projectsContent" style={{ x }}>
          <div className="sectionHeader">
            <h3 className="title">Projects</h3>
          </div>
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
                <Link
                  className="projectLink"
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit {project.name}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
