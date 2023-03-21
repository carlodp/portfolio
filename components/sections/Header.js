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

const LINKS = [
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

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavToggled, setIsNavToggled] = useState(false);

  const toggleHoverHandler = () => {
    setIsHovered((isHovered) => !isHovered);
  };

  const toggleNavigationHandler = () => {
    document.querySelector('body').classList.toggle('open-navigation');
    setIsNavToggled((isNavToggled) => !isNavToggled);
  };

  const goToSectionHandler = () => {
    document.querySelector('body').classList.toggle('open-navigation');
    setIsNavToggled((isNavToggled) => !isNavToggled);
  }

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
        <div className={`column pageLinks${isHovered ? " hovered" : ""}`}>
          {LINKS.map((link, index) => (
            <Link
              key={link + index}
              href={link.url}
              onMouseEnter={toggleHoverHandler}
              onMouseLeave={toggleHoverHandler}
              onClick={goToSectionHandler}
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
          asd
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
