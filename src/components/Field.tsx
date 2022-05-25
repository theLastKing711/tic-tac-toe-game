import React from "react";
import styled from "styled-components";
import boardItem from "../models/boradItem";

const StyledField = styled.div<StyledProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 5rem;
  cursor: pointer;
  border: 1px solid black;

  background-color: ${(props) =>
    props.winFields.includes(props.ids) ? "purple" : "blue"};

  transition: background-color 1s;

  :hover {
    background-color: black;
    color: white;
  }
`;

interface Props extends boardItem {
  fieldClicked: (id: number) => void;
  winFields: number[];
}

interface StyledProps {
  winFields: number[];
  ids: number;
}

const Field: React.FC<Props> = ({
  id,
  letter,
  isDone,
  winFields,
  fieldClicked,
}) => {
  return (
    <StyledField
      onClick={() => fieldClicked(id)}
      winFields={winFields}
      ids={id}
    >
      <span>{letter}</span>
    </StyledField>
  );
};

export default Field;
