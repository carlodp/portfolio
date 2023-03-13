import { motion } from "framer-motion";
import styles from '@/styles/components/Logo.module.scss'

const headerStatusVariant = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.3,
        ease: "easeIn",
      },
      y: {
        duration: 0.5,
        type: "spring",
        stiffness: 75,
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
          <span>CARLO</span>
          <div className="hover">
            <span className="copyright">©2023</span>
            <span className="lastName">SANTOS</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Logo;