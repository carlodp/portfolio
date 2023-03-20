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
    url: "#!",
    title: "About",
  },
  {
    url: "#!",
    title: "Skills",
  },
  {
    url: "#!",
    title: "Experience",
  },
  {
    url: "#!",
    title: "Projects",
  },
  {
    url: "#!",
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
        <div className={`column pageLinks${isHovered ? " hovered" : ""}`}>
          {LINKS.map((link, index) => (
            <Link
              key={link + index}
              href={link.url}
              onMouseEnter={toggleHoverHandler}
              onMouseLeave={toggleHoverHandler}
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
          <ThemeSwitcher />
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
