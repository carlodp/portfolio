import { motion } from "framer-motion";
import styles from "@/styles/sections/Header.module.scss";
import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";
import { useState } from "react";
import AnimateLetters from "../reusable/AnimateLetters";

const menuTogglerVariant = {
  hidden: {
    x: 200,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

const PAGE_LINKS = [
  {
    url: "#about",
    title: "About",
  },
  {
    url: "#experience",
    title: "Experience",
  },
  {
    url: "#skills",
    title: "Skills",
  },
  {
    url: "#projects",
    title: "Projects",
  },
  {
    url: "#contact",
    title: "Contact",
  },
];

const SOCIAL_LINKS = [
  {
    url: "https://www.linkedin.com/in/carlodp/",
    title: "LinkedIn",
  },
  {
    url: "https://github.com/carlodp",
    title: "GitHub",
  },
  {
    url: "https://www.instagram.com/carlodp_/",
    title: "Instagram",
  },
];

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isNavToggled, setIsNavToggled] = useState(false);

  const toggleHoverHandler = () => {
    setIsHovered((isHovered) => !isHovered);
  };

  const toggleHoverHandler2 = () => {
    setIsHovered2((isHovered2) => !isHovered2);
  };

  const toggleNavigationHandler = () => {
    document.querySelector("body").classList.toggle("open-navigation");
    setIsNavToggled((isNavToggled) => !isNavToggled);
  };

  return (
    <header className={styles.header}>
      <motion.button
        type="button"
        className="menuToggler"
        variants={menuTogglerVariant}
        initial="hidden"
        animate="visible"
        onClick={toggleNavigationHandler}
      >
        {isNavToggled ? "CLOSE" : "MENU"}
      </motion.button>
      <motion.nav
        className={`nav${isNavToggled ? " toggled" : ""}`}
        initial="hidden"
        animate="visible"
      >
        <ThemeSwitcher />
        <h1 className="navName">Carlo Santos</h1>
        <div className={`column pageLinks${isHovered ? " hovered" : ""}`}>
          {PAGE_LINKS.map((link, index) => (
            <Link
              key={link + index}
              href={link.url}
              onMouseEnter={toggleHoverHandler}
              onMouseLeave={toggleHoverHandler}
              onClick={toggleNavigationHandler}
            >
              <AnimateLetters
                type="letters"
                title={link.title}
                duration="1"
                stagger="0.025"
                repeat="true"
              />
            </Link>
          ))}
        </div>
        <div className="column socialLinks">
          <div className="infos">
            <a href="tel:+639175078842">
              <AnimateLetters
                type="sentence"
                title="+63 917 507 8842"
                duration="1"
                stagger="0.025"
                repeat="true"
              />
            </a>
            <a href="mailto:hello@carlosantos.dev">
              <AnimateLetters
                type="sentence"
                title="hello@carlosantos.dev"
                duration="1"
                stagger="0.025"
                repeat="true"
              />
            </a>
          </div>
          <div className={`links${isHovered2 ? " hovered" : ""}`}>
            {SOCIAL_LINKS.map((link, index) => (
              <Link
                key={link + index}
                href={link.url}
                onMouseEnter={toggleHoverHandler2}
                onMouseLeave={toggleHoverHandler2}
                onClick={toggleNavigationHandler}
              >
                <AnimateLetters
                  type="letters"
                  title={link.title}
                  duration="1"
                  stagger="0.025"
                  repeat="true"
                />
              </Link>
            ))}
          </div>
          <div className="footer">
            <p className="copyright">©2023 Carlo Santos.</p>
            <p className="copyright">Based on Manila, Philippines</p>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
