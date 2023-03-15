import styled from "@/styles/components/AccordionList.module.scss";

const AccordionList = (props) => {
  return (
    <ul
      id={props.id}
      className={styled.accordion}
      role="tablist"
      aria-live="polite"
      data-behavior="accordion"
    >
      {props.children}
    </ul>
  );
};

export default AccordionList;
