import styles from "@/styles/Splash.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const preloaderContainerVar = {
  initial: {
    opacity: 1,
    scale: "100%",
  },
  exit: {
    scale: "200%",
    opacity: 0,
    transition: {
      delay: 3.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const helloSvg = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const helloPaths = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const myNameIsVariant = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.9,
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const nameSvg = {
  initial: {
    opacity: 0,
    y: -30,
    fill: "rgba(255, 255, 255, 0)",
  },
  animate: {
    opacity: 1,
    y: 0,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      type: "spring",
      stiffness: 120,
      y: {
        duration: 0.5,
      },
      fill: {
        duration: 0.5,
        delay: 3,
      },
    },
  },
};

const namePaths = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      delay: 2.2,
      duration: 1,
      ease: "easeIn",
    },
  },
};

const Splash = (props) => {
  const showMainPageHandler = () => {
    props.splashEnd(true);
  };

  return (
    <AnimatePresence onExitBeforeEnter onExitComplete={showMainPageHandler}>
      {props.showSplash && (
        <>
          <div className={styles.splash}>
            <motion.div
              variants={preloaderContainerVar}
              className="preloader"
              initial="initial"
              exit="exit"
            >
              <motion.div className="preloaderContent">
                <motion.svg
                  className="hello"
                  variants={helloSvg}
                  initial="initial"
                  animate="animate"
                  viewBox="0 0 569 214"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    variants={helloPaths}
                    initial="hidden"
                    animate="visible"
                    d="M4.25 171.17C15.21 167.4 30.94 159.33 46.48 145.1C75.35 118.67 102.23 88.07 112.72 71.31C118.7 61.76 123.21 51.35 126.63 40.62C130.55 28.32 129.85 12.94 114.08 10.26C109.29 9.45001 104.3 10.51 100.52 13.56C92.47 20.06 90.36 31.86 88.97 41.51C87.03 54.96 85.17 68.42 82.88 81.82C80.13 97.91 79.53 114.3 77.25 130.42C77.25 130.42 70.83 179.01 69.55 194.83C69.21 199.08 71.44 208.16 76.59 200.31C81.69 192.54 86.1 171.19 89.5 162.54C97.27 142.77 106.91 121.56 125.32 109.43C126.56 108.62 128.01 108.12 129.49 108.13C134.42 108.16 135.24 113.07 135.4 116.51C135.53 119.44 135.36 122.37 134.95 125.28C133.39 136.29 129.75 146.98 127.5 157.89C125.27 168.7 121.09 183.81 125.29 194.62C126.2 196.97 127.78 198.71 130.45 199.06C133.29 199.43 136.09 198.25 138.69 197.03C151.99 190.75 164.21 182.51 176.3 174.21C184.86 168.33 193.52 162.6 201.94 156.54C209.41 151.16 217.37 145.82 222.51 137.99C226.68 131.65 228.67 123.45 226.03 116.34C223.51 109.56 216.96 104.66 209.85 103.33C202.74 102 195.23 103.98 189.17 107.92C183.11 111.86 178.4 117.66 174.92 124C165.45 141.29 164.05 164.92 175.98 181.33C186.41 195.67 202.32 196.67 202.33 196.67C223 197.96 239.49 188.17 254.2 174.52C290.73 140.64 314.54 95.74 330.69 49.09C334.11 39.21 337.46 27.75 331.55 17.95C329.4 14.39 326.09 11.58 322.06 10.56C312.81 8.23001 305 15.47 300.08 22.16C288.72 37.58 283.65 56.27 277.77 74.21C270.25 97.18 265.68 118.06 265.45 140.78C265.29 155.98 266.89 179.26 280.09 189.44C289.14 196.42 300.81 195.27 310.82 191.01C326.91 184.17 339.46 171.52 350.26 158.11C374.67 127.79 396.44 92.92 407.86 55.44C411.49 43.52 416.8 28.54 408.2 17.47C403.12 10.93 393.42 7.94001 386.04 11.67C377.18 16.15 372.04 28.28 368.23 36.86C363.4 47.72 359.97 59.15 356.74 70.56C347.53 103.12 342.73 133.74 352.53 170.87C353.12 173.1 355.09 179.53 356.77 182.55C362.41 192.71 373.8 198.46 385.28 196.65C386.27 196.49 387.15 196.3 387.86 196.05C401.16 191.48 409.08 180.41 416.12 168.67C416.12 168.67 410.38 102.85 468.69 100.89C468.69 100.89 411.56 102.28 421.73 166.06C431.9 229.84 531.37 188.32 494.51 118.5C456.48 46.47 399.33 215.12 562.6 103.84"
                    stroke="white"
                    strokeWidth="20"
                    strokeMiterlimit="10"
                  />
                </motion.svg>

                <motion.span
                  className="preName"
                  variants={myNameIsVariant}
                  initial="hidden"
                  animate="visible"
                >
                  my name is
                </motion.span>

                <motion.svg
                  className="name"
                  variants={nameSvg}
                  initial="initial"
                  animate="animate"
                  viewBox="0 0 265 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M66.7698 17.75H56.8153C56.6335 16.4621 56.2623 15.3182 55.7017 14.3182C55.1411 13.303 54.4214 12.4394 53.5426 11.7273C52.6638 11.0151 51.6486 10.4697 50.4971 10.0909C49.3608 9.71212 48.1259 9.52272 46.7926 9.52272C44.3835 9.52272 42.285 10.1212 40.4971 11.3182C38.7092 12.5 37.3229 14.2273 36.338 16.5C35.3532 18.7576 34.8607 21.5 34.8607 24.7273C34.8607 28.0454 35.3532 30.8333 36.338 33.0909C37.338 35.3485 38.732 37.053 40.5198 38.2045C42.3077 39.3561 44.3759 39.9318 46.7244 39.9318C48.0426 39.9318 49.2623 39.7576 50.3835 39.4091C51.5198 39.0606 52.5274 38.553 53.4062 37.8864C54.285 37.2045 55.0123 36.3788 55.588 35.4091C56.1789 34.4394 56.588 33.3333 56.8153 32.0909L66.7698 32.1364C66.5123 34.2727 65.8683 36.3333 64.838 38.3182C63.8229 40.2879 62.4517 42.053 60.7244 43.6136C59.0123 45.1591 56.9668 46.3864 54.588 47.2955C52.2244 48.1894 49.5501 48.6364 46.5653 48.6364C42.4138 48.6364 38.7017 47.697 35.4289 45.8182C32.1714 43.9394 29.5956 41.2197 27.7017 37.6591C25.8229 34.0985 24.8835 29.7879 24.8835 24.7273C24.8835 19.6515 25.838 15.3333 27.7471 11.7727C29.6562 8.21212 32.2471 5.49999 35.5198 3.63636C38.7926 1.75757 42.4744 0.818176 46.5653 0.818176C49.2623 0.818176 51.7623 1.19696 54.0653 1.95454C56.3835 2.71212 58.4365 3.81818 60.2244 5.27272C62.0123 6.71211 63.4668 8.47727 64.588 10.5682C65.7244 12.6591 66.4517 15.053 66.7698 17.75Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M80.9744 48H70.4289L86.4971 1.45454H99.1789L115.224 48H104.679L93.0198 12.0909H92.6562L80.9744 48ZM86.9262 29.7045H98.7387L101.233 37.3864H84.4272L86.9262 29.7045Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M120.827 48V1.45454H139.19C142.705 1.45454 145.705 2.08333 148.19 3.3409C150.69 4.58333 152.592 6.34848 153.895 8.63636C155.213 10.9091 155.872 13.5833 155.872 16.6591C155.872 19.75 155.205 22.4091 153.872 24.6364C152.539 26.8485 150.607 28.5454 148.077 29.7273C145.562 30.9091 142.516 31.5 138.94 31.5H130.668V23.5909H137.349C139.228 23.5909 140.789 23.3333 142.031 22.8182C143.274 22.303 144.198 21.5303 144.804 20.5C145.425 19.4697 145.736 18.1894 145.736 16.6591C145.736 15.1136 145.425 13.8106 144.804 12.75C144.198 11.6894 143.266 10.8864 142.008 10.3409C140.766 9.7803 139.198 9.5 137.304 9.5H130.668V48H120.827ZM145.963 30.5431L157.531 48H146.668L135.349 31.5L145.963 30.5431Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M162.827 48V1.45454H172.668V39.8864H192.622V48H162.827Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M240.099 24.7273C240.099 29.803 239.137 34.1212 237.213 37.6818C235.304 41.2424 232.698 43.9621 229.395 45.8409C226.107 47.7045 222.41 48.6364 218.304 48.6364C214.168 48.6364 210.455 47.697 207.168 45.8182C203.88 43.9394 201.281 41.2197 199.372 37.6591C197.463 34.0985 196.508 29.7879 196.508 24.7273C196.508 19.6515 197.463 15.3333 199.372 11.7727C201.281 8.21212 203.88 5.49999 207.168 3.63636C210.455 1.75757 214.168 0.818176 218.304 0.818176C222.41 0.818176 226.107 1.75757 229.395 3.63636C232.698 5.49999 235.304 8.21212 237.213 11.7727C239.137 15.3333 240.099 19.6515 240.099 24.7273ZM230.122 24.7273C230.122 21.4394 229.63 18.6667 228.645 16.4091C227.675 14.1515 226.304 12.4394 224.531 11.2727C222.758 10.1061 220.683 9.52272 218.304 9.52272C215.925 9.52272 213.849 10.1061 212.077 11.2727C210.304 12.4394 208.925 14.1515 207.94 16.4091C206.971 18.6667 206.486 21.4394 206.486 24.7273C206.486 28.0151 206.971 30.7879 207.94 33.0455C208.925 35.303 210.304 37.0151 212.077 38.1818C213.849 39.3485 215.925 39.9318 218.304 39.9318C220.683 39.9318 222.758 39.3485 224.531 38.1818C226.304 37.0151 227.675 35.303 228.645 33.0455C229.63 30.7879 230.122 28.0151 230.122 24.7273Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M27.5767 73.8409C27.3948 72.0076 26.6145 70.5833 25.2358 69.5682C23.857 68.553 21.9858 68.0455 19.6221 68.0455C18.0161 68.0455 16.66 68.2727 15.5539 68.7273C14.4479 69.1667 13.5994 69.7803 13.0085 70.5682C12.4327 71.3561 12.1448 72.25 12.1448 73.25C12.1145 74.0833 12.2888 74.8106 12.6676 75.4318C13.0615 76.053 13.5994 76.5909 14.2812 77.0455C14.963 77.4848 15.7509 77.8712 16.6448 78.2045C17.5388 78.5227 18.4933 78.7954 19.5085 79.0227L23.6903 80.0227C25.7206 80.4773 27.5842 81.0833 29.2812 81.8409C30.9782 82.5985 32.4479 83.5303 33.6903 84.6364C34.9327 85.7424 35.8948 87.0455 36.5767 88.5455C37.2736 90.0455 37.6297 91.7652 37.6448 93.7045C37.6297 96.553 36.9024 99.0227 35.463 101.114C34.0388 103.189 31.9782 104.803 29.2812 105.955C26.5994 107.091 23.3645 107.659 19.5767 107.659C15.8191 107.659 12.5464 107.083 9.75848 105.932C6.98575 104.78 4.81908 103.076 3.25848 100.818C1.71302 98.5454 0.902418 95.7348 0.82666 92.3864H10.3494C10.4554 93.947 10.9024 95.25 11.6903 96.2955C12.4933 97.3258 13.5615 98.106 14.8948 98.6364C16.2433 99.1515 17.7661 99.4091 19.463 99.4091C21.1297 99.4091 22.5767 99.1667 23.8039 98.6818C25.0464 98.197 26.0085 97.5227 26.6903 96.6591C27.3721 95.7955 27.713 94.803 27.713 93.6818C27.713 92.6364 27.4024 91.7576 26.7812 91.0455C26.1751 90.3333 25.2812 89.7273 24.0994 89.2273C22.9327 88.7273 21.5009 88.2727 19.8039 87.8636L14.7358 86.5909C10.8115 85.6364 7.71302 84.1439 5.4403 82.1136C3.16757 80.0833 2.03878 77.3485 2.05393 73.9091C2.03878 71.0909 2.78878 68.6288 4.30393 66.5227C5.83424 64.4167 7.93272 62.7727 10.5994 61.5909C13.2661 60.4091 16.2964 59.8182 19.6903 59.8182C23.1448 59.8182 26.16 60.4091 28.7358 61.5909C31.3267 62.7727 33.3418 64.4167 34.7812 66.5227C36.2206 68.6288 36.963 71.0682 37.0085 73.8409H27.5767Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M51.2244 107H40.6789L56.7471 60.4545H69.4289L85.4744 107H74.9289L63.2698 71.0909H62.9062L51.2244 107ZM57.1762 88.7045H68.9887L71.4829 96.3864H54.6772L57.1762 88.7045Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M130.008 60.4545V107H121.508L101.258 77.7045H100.918V107H91.0767V60.4545H99.713L119.804 89.7273H120.213V60.4545H130.008Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M136.366 68.5682V60.4545H174.594V68.5682H160.344V107H150.616V68.5682H136.366Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M221.537 83.7273C221.537 88.803 220.575 93.1212 218.651 96.6818C216.741 100.242 214.135 102.962 210.832 104.841C207.544 106.705 203.848 107.636 199.741 107.636C195.605 107.636 191.893 106.697 188.605 104.818C185.317 102.939 182.719 100.22 180.81 96.6591C178.901 93.0985 177.946 88.7879 177.946 83.7273C177.946 78.6515 178.901 74.3333 180.81 70.7727C182.719 67.2121 185.317 64.5 188.605 62.6364C191.893 60.7576 195.605 59.8182 199.741 59.8182C203.848 59.8182 207.544 60.7576 210.832 62.6364C214.135 64.5 216.741 67.2121 218.651 70.7727C220.575 74.3333 221.537 78.6515 221.537 83.7273ZM211.56 83.7273C211.56 80.4394 211.067 77.6667 210.082 75.4091C209.113 73.1515 207.741 71.4394 205.969 70.2727C204.196 69.1061 202.12 68.5227 199.741 68.5227C197.363 68.5227 195.287 69.1061 193.514 70.2727C191.741 71.4394 190.363 73.1515 189.378 75.4091C188.408 77.6667 187.923 80.4394 187.923 83.7273C187.923 87.0151 188.408 89.7879 189.378 92.0455C190.363 94.303 191.741 96.0151 193.514 97.1818C195.287 98.3485 197.363 98.9318 199.741 98.9318C202.12 98.9318 204.196 98.3485 205.969 97.1818C207.741 96.0151 209.113 94.303 210.082 92.0455C211.067 89.7879 211.56 87.0151 211.56 83.7273Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <motion.path
                    variants={namePaths}
                    initial="hidden"
                    animate="visible"
                    d="M254.077 73.8409C253.895 72.0076 253.115 70.5833 251.736 69.5682C250.357 68.553 248.486 68.0455 246.122 68.0455C244.516 68.0455 243.16 68.2727 242.054 68.7273C240.948 69.1667 240.099 69.7803 239.508 70.5682C238.933 71.3561 238.645 72.25 238.645 73.25C238.615 74.0833 238.789 74.8106 239.168 75.4318C239.562 76.053 240.099 76.5909 240.781 77.0455C241.463 77.4848 242.251 77.8712 243.145 78.2045C244.039 78.5227 244.993 78.7954 246.008 79.0227L250.19 80.0227C252.221 80.4773 254.084 81.0833 255.781 81.8409C257.478 82.5985 258.948 83.5303 260.19 84.6364C261.433 85.7424 262.395 87.0455 263.077 88.5455C263.774 90.0455 264.13 91.7652 264.145 93.7045C264.13 96.553 263.402 99.0227 261.963 101.114C260.539 103.189 258.478 104.803 255.781 105.955C253.099 107.091 249.865 107.659 246.077 107.659C242.319 107.659 239.046 107.083 236.258 105.932C233.486 104.78 231.319 103.076 229.758 100.818C228.213 98.5454 227.402 95.7348 227.327 92.3864H236.849C236.955 93.947 237.402 95.25 238.19 96.2955C238.993 97.3258 240.062 98.106 241.395 98.6364C242.743 99.1515 244.266 99.4091 245.963 99.4091C247.63 99.4091 249.077 99.1667 250.304 98.6818C251.546 98.197 252.508 97.5227 253.19 96.6591C253.872 95.7955 254.213 94.803 254.213 93.6818C254.213 92.6364 253.902 91.7576 253.281 91.0455C252.675 90.3333 251.781 89.7273 250.599 89.2273C249.433 88.7273 248.001 88.2727 246.304 87.8636L241.236 86.5909C237.312 85.6364 234.213 84.1439 231.94 82.1136C229.668 80.0833 228.539 77.3485 228.554 73.9091C228.539 71.0909 229.289 68.6288 230.804 66.5227C232.334 64.4167 234.433 62.7727 237.099 61.5909C239.766 60.4091 242.796 59.8182 246.19 59.8182C249.645 59.8182 252.66 60.4091 255.236 61.5909C257.827 62.7727 259.842 64.4167 261.281 66.5227C262.721 68.6288 263.463 71.0682 263.508 73.8409H254.077Z"
                    stroke="white"
                    strokeWidth="1"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Splash;
