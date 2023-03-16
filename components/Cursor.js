import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    if (document.readyState === "complete") {
      const cursorMove = (event) => {
        setCursorPos({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener("mousemove", cursorMove);
      return () => {
        window.removeEventListener("mousemove", cursorMove);
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mouseover", (event) => {
      const a = event.target.closest(
        "a, button, .headerStatus .name, .heroTexts .title span, .accordionTitle, .skillsList span, .sectionHeader h2"
      );
      if (a) {
        setCursorVariant("text");
      }
    });
    window.addEventListener("mouseout", (event) => {
      const a = event.target.closest(
        "a, button, .headerStatus .name, .heroTexts .title span, .accordionTitle, .skillsList span, .sectionHeader h2"
      );
      if (a) {
        setCursorVariant("default");
      }
    });
  }, [cursorVariant]);

  const variants = {
    default: {
      x: cursorPos.x - 32,
      y: cursorPos.y - 32,
      height: 64,
      width: 64,
      scale: 1,
      transition: {
        delay: 0,
        duration: 0,
        ease: "easeInOut",
        scale: {
          duration: 0.25,
        },
      },
    },
    text: {
      x: cursorPos.x - 32,
      y: cursorPos.y - 32,
      height: 64,
      width: 64,
      scale: 1.3,
      transition: {
        delay: 0,
        duration: 0,
        scale: {
          duration: 0.25,
        },
      },
    },
  };

  return (
    <motion.div
      className={`cursor ${cursorVariant}`}
      variants={variants}
      animate={cursorVariant}
    >
      <span className="cursorLogo"></span>
    </motion.div>
  );
};

export default Cursor;
