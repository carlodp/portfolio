import { motion } from "framer-motion";
import styles from "@/styles/components/Logo.module.scss";

const headerStatusVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  },
};

const headerContainerVariant = {
  pageLoading: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  pageLoaded: {
    y: -24,
    transition: {
      duration: 0.5,
      delay: 3,
    },
  },
};

const Logo = (props) => {
  return (
    <div className={`logo ${styles.logo}`}>
      <motion.div
        className="headerStatus"
        variants={headerStatusVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="name"
          variants={headerContainerVariant}
          animate={props.loadStatus}
        >
          {/* <span>Carlo</span>
          <div className="hover">
            <span className="copyright">©2023</span>
            <span className="lastName">Santos</span>
          </div> */}
          <motion.div
            className="custom-text final"
            transition={{
              ease: [0.6, 0.01, 0.05, 0.9],
              duration: 1,
            }}
            layoutId="splash-text"
            layout
          >
            Carlo Santos
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Logo;
