import { motion } from "framer-motion";
import Image from "next/image";
import styled from "@/styles/components/About.module.scss";
import SectionHeader from "./SectionHeader";

const aboutDivVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5, // this will set a delay before the children start animating
      staggerChildren: 0,
    },
  },
};

const aboutChildVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <div className={styled.about}>
      <SectionHeader title="About" position="left" number="01." />
      <motion.div className="aboutMe"
        variants={aboutDivVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text" variants={aboutChildVariants}>
          <p>
            As an eight-year software engineer, I&apos;m driven to craft stunning,
            responsive, and user-friendly websites and applications through the
            utilization of cutting-edge technologies and industry best
            practices. I&apos;ve tackled various projects for clients of all
            sizes, delivering exceptional solutions that meet and exceed their
            expectations.
          </p>
          <p>
            My expertise lies in HTML, CSS, JavaScript, React, Angular, Vue, and
            web design tools such as Photoshop, Sketch, and Figma. I&apos;m
            continuously upskilling and staying up-to-date with the latest web
            development trends. I&apos;m a team player who collaborates
            seamlessly with other developers, designers, and stakeholders.
            I&apos;m also a self-starter who thrives on independent creative
            problem-solving.
          </p>
          <a href="#!" className="button with-bg">
            Browse My Projects
          </a>
        </motion.div>
        <motion.div className="image" variants={aboutChildVariants}>
          <div className="imageContainer">
            <Image
              src="/profile-image.JPG"
              alt="Carlo Santos"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
