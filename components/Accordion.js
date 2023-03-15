import styled from "@/styles/components/Accordion.module.scss";
import { useEffect } from "react";

const Accordion = (props) => {
  useEffect(() => {
    if (props.defaultExpanded) {
      props.toggleOpen(props.id);
    }
  }, []);

  const toggleAccordionHandler = () => {
    props.toggleOpen(props.id);
  };

  return (
    <>
      <li
        className={`accordion ${styled.accordionItem}${
          props.open ? " show" : ""
        }`}
        aria-expanded="false"
        role="tab"
      >
        <div
          id={props.id}
          className="accordionTitle"
          tabIndex="0"
          type="button"
          aria-controls={`panel-${props.id}`}
          onClick={toggleAccordionHandler}
        >
          <div className="title">
            <h3>{props.position}</h3>
            <span>{props.company}</span>
          </div>
          <div className="dateAttended">
            <span>{props.dateAttended}</span>
          </div>
        </div>

        <div
          id={`panel-${props.id}`}
          className={`accordionContent${props.open ? "" : " collapse"}`}
          role="tabpanel"
          aria-hidden="true"
          aria-labelledby={props.id}
          data-binding="expand-accordion-container"
        >
          <div className="accordionContent-inner">
            <p>{props.description}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default Accordion;
