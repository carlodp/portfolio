import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "@/styles/components/Cursor.module.scss";

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
        "a, button"
      );
      if (a) {
        setCursorVariant("text");
      }
    });
    window.addEventListener("mouseout", (event) => {
      const a = event.target.closest(
        "a, button"
      );
      if (a) {
        setCursorVariant("default");
      }
    });
  }, [cursorVariant]);

  const variants = {
    default: {
      x: cursorPos.x - 20,
      y: cursorPos.y - 20,
      height: 40,
      width: 40,
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
      x: cursorPos.x - 20,
      y: cursorPos.y - 20,
      height: 40,
      width: 40,
      scale: 1.5,
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
      className={styled.cursor}
      variants={variants}
      animate={cursorVariant}
    >
      <span className="cursorLogo"></span>
    </motion.div>
  );
};

export default Cursor;
