import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import styled from "@/styles/components/Splash.module.scss";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const helloSvg = {
  initial: (isTabletOrMobile) => ({
    x: isTabletOrMobile ? 0 : 160,
    y: isTabletOrMobile ? 170 : 0,
  }),
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      opacity: {
        duration: 1,
      },
      x: {
        delay: 2.2,
        duration: 1,
        ease: [0.6, 0.01, 0.05, 0.9],
      },
      y: {
        delay: 2.2,
        duration: 1,
        ease: [0.6, 0.01, 0.05, 0.9],
      },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.9],
      duration: 0.4,
    },
  },
};

const helloPathVariant = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.8,
      ease: "easeInOut",
    },
  },
};

const imVariant = {
  hidden: (isTabletOrMobile) => ({
    opacity: 0,
    x: isTabletOrMobile ? 0 : -70,
    y: isTabletOrMobile ? 150 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: 2.2,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.9],
      duration: 0.4,
    },
  },
};

const nameVariant = {
  hidden: (isTabletOrMobile) => ({
    opacity: 0,
    x: isTabletOrMobile ? 0 : -70,
    y: isTabletOrMobile ? 150 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.9],
      duration: 1,
      delay: 2.2,
    },
  },
};

const Splash = ({ setLoading }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1230px)" });

  return (
    <motion.div className={styled.splash}>
      <motion.div
        className="splash-container"
        variants={container}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.div className="hello">
          <motion.svg
            variants={helloSvg}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={isTabletOrMobile}
            viewBox="0 0 569 214"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={helloPathVariant}
              initial="hidden"
              animate="visible"
              d="M4.25 171.17C15.21 167.4 30.94 159.33 46.48 145.1C75.35 118.67 102.23 88.07 112.72 71.31C118.7 61.76 123.21 51.35 126.63 40.62C130.55 28.32 129.85 12.94 114.08 10.26C109.29 9.45001 104.3 10.51 100.52 13.56C92.47 20.06 90.36 31.86 88.97 41.51C87.03 54.96 85.17 68.42 82.88 81.82C80.13 97.91 79.53 114.3 77.25 130.42C77.25 130.42 70.83 179.01 69.55 194.83C69.21 199.08 71.44 208.16 76.59 200.31C81.69 192.54 86.1 171.19 89.5 162.54C97.27 142.77 106.91 121.56 125.32 109.43C126.56 108.62 128.01 108.12 129.49 108.13C134.42 108.16 135.24 113.07 135.4 116.51C135.53 119.44 135.36 122.37 134.95 125.28C133.39 136.29 129.75 146.98 127.5 157.89C125.27 168.7 121.09 183.81 125.29 194.62C126.2 196.97 127.78 198.71 130.45 199.06C133.29 199.43 136.09 198.25 138.69 197.03C151.99 190.75 164.21 182.51 176.3 174.21C184.86 168.33 193.52 162.6 201.94 156.54C209.41 151.16 217.37 145.82 222.51 137.99C226.68 131.65 228.67 123.45 226.03 116.34C223.51 109.56 216.96 104.66 209.85 103.33C202.74 102 195.23 103.98 189.17 107.92C183.11 111.86 178.4 117.66 174.92 124C165.45 141.29 164.05 164.92 175.98 181.33C186.41 195.67 202.32 196.67 202.33 196.67C223 197.96 239.49 188.17 254.2 174.52C290.73 140.64 314.54 95.74 330.69 49.09C334.11 39.21 337.46 27.75 331.55 17.95C329.4 14.39 326.09 11.58 322.06 10.56C312.81 8.23001 305 15.47 300.08 22.16C288.72 37.58 283.65 56.27 277.77 74.21C270.25 97.18 265.68 118.06 265.45 140.78C265.29 155.98 266.89 179.26 280.09 189.44C289.14 196.42 300.81 195.27 310.82 191.01C326.91 184.17 339.46 171.52 350.26 158.11C374.67 127.79 396.44 92.92 407.86 55.44C411.49 43.52 416.8 28.54 408.2 17.47C403.12 10.93 393.42 7.94001 386.04 11.67C377.18 16.15 372.04 28.28 368.23 36.86C363.4 47.72 359.97 59.15 356.74 70.56C347.53 103.12 342.73 133.74 352.53 170.87C353.12 173.1 355.09 179.53 356.77 182.55C362.41 192.71 373.8 198.46 385.28 196.65C386.27 196.49 387.15 196.3 387.86 196.05C401.16 191.48 409.08 180.41 416.12 168.67C416.12 168.67 410.38 102.85 468.69 100.89C468.69 100.89 411.56 102.28 421.73 166.06C431.9 229.84 531.37 188.32 494.51 118.5C456.48 46.47 399.33 215.12 562.6 103.84"
              stroke="white"
              strokeWidth="20"
              strokeMiterlimit="10"
            />
          </motion.svg>
        </motion.div>

        <motion.div className="name">
          <div>
            <motion.p
              className="pre-name"
              variants={imVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={isTabletOrMobile}
            >
              I&apos;M
            </motion.p>
          </div>
          <motion.p variants={nameVariant} 
              custom={isTabletOrMobile} layout layoutId="splash-text">
            <span>CARLO</span>
            <span>SANTOS</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Splash;
