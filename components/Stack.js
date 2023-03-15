import styled from "@/styles/components/Stack.module.scss";

const Stack = (props) => {
  return (
    <div className={styled.stack}>
      <h3 className="stackTitle">{props.stack.title}</h3>
      <div className="skillsList">
        {props.stack.skills.map((skill) => (
          <span>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Stack;
