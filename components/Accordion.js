import styled from "@/styles/components/Accordion.module.scss";
import { useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Accordion = (props) => {
  const animate = useAnimation();
  useEffect(() => {
    if (props.defaultExpanded) {
      props.toggleOpen(props.id);
    }
  }, []);

  useEffect(() => {
    if (props.open === props.id) {
      animate.start("animate");
    } else {
      animate.start("initial");
    }
  }, [props.open]);

  const toggleAccordionHandler = (e) => {
    if (e._reactName === "onClick") {
      props.toggleOpen(props.id);
    }

    if (e._reactName === "onKeyUp") {
      if (e.keyCode === 13) {
        props.toggleOpen(props.id);
      }
    }
  };

  const accordionToggleVariants = {
    hidden: {
      height: 0,
      transition: {
        duration: 0.35,
        ease: "easeIn",
      },
    },
    visible: {
      height: "auto",
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const spinnerVariants = {
    initial: {
      rotate: "45deg",
      transition: {
        duration: 0.35,
        ease: "linear",
      },
    },
    animate: {
      rotate: "405deg",
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 3,
      },
    },
  };
  

  const toggleCondition = props.open === props.id;
   
  return (
    <>
      <li
        className={`accordion ${styled.accordionItem} ${
          toggleCondition ? "show" : ""
        }`}
        aria-expanded="false"
        role="tab"
      >
        <motion.span
          className="spinner"
          variants={spinnerVariants}
          initial="initial"
          animate={animate}
          onClick={toggleAccordionHandler}
        ></motion.span>
        <div
          id={props.id}
          className={`accordionTitle ${toggleCondition && 'active'}`}
          tabIndex="0"
          type="button"
          aria-controls={`panel-${props.id}`}
          onClick={toggleAccordionHandler}
          onKeyUp={toggleAccordionHandler}
        >
          <div className="title">
            <h3>{props.position}</h3>
            <span>{props.company}</span>
          </div>
          <div className="dateAttended">
            <span>{props.dateAttended}</span>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {toggleCondition && (
            <motion.div
              variants={accordionToggleVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              id={`panel-${props.id}`}
              className={`accordionContent${toggleCondition ? "" : " collapse"}`}
              role="tabpanel"
              aria-hidden="true"
              aria-labelledby={props.id}
              data-binding="expand-accordion-container"
            >
              <div className="accordionContent-inner">
                <p>{props.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};

export default Accordion;
