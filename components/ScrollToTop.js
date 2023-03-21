import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import styled from "@/styles/components/ScrollToTop.module.scss";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTopHandler() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollToTop = () => {
  const [isShowing, setIsShowing] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.3) {
        setIsShowing("show");
      }

      if (latestValue > 0.9) {
        setIsShowing("showFooter");
      }

      if (latestValue < 0.3) {
        setIsShowing("hide");
      }
    });
  });

  return (
    <div className={styled.scrollTop}>
      <motion.button
        type="button"
        className={`${isShowing}`}
        onClick={scrollToTopHandler}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.33355e-06 10.4167L2.20313 12.2526L10.9375 4.98698L10.9375 37.1094L14.0625 37.1094L14.0625 4.98698L22.7813 12.2656L25 10.4167L12.5 -1.09278e-06L2.33355e-06 10.4167Z"
            fill="black"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default ScrollToTop;
