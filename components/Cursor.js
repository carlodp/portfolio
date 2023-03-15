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
      const a = event.target.closest("a, button");
      if (a) {
        setCursorVariant("text");
      }
    });
    window.addEventListener("mouseout", (event) => {
      const a = event.target.closest("a, button");
      if (a) {
        setCursorVariant("default");
      }
    });
  }, [cursorVariant]);

  const variants = {
    default: {
      x: cursorPos.x - 24,
      y: cursorPos.y - 24,
      height: 48,
      width: 48,
      scale: 1,
      transition: {
        delay: 0,
        duration: 0,
        scale: {
          duration: 0.25,
        },
      },
    },
    text: {
      x: cursorPos.x - 24,
      y: cursorPos.y - 24,
      height: 48,
      width: 48,
      scale: 1,
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
    ></motion.div>
  );
};

export default Cursor;
