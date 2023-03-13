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
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      height: 32,
      width: 32,
      scale: 1,
      transition: {
        delay: 0,
        duration: 0,
        scale: {
          duration: 0.25,
        }
      },
    },
    text: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      height: 32,
      width: 32,
      scale: 1.5,
      transition: {
        delay: 0,
        duration: 0,
        scale: {
          duration: 0.25,
        }
      },
    },
  };

  return (
    <motion.div className={`cursor ${cursorVariant}`} variants={variants} animate={cursorVariant}>
      <span className="dot"></span>
    </motion.div>
  );
};

export default Cursor;
