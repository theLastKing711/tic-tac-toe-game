import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 2rem;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 1rem 2rem;
  border-color: transparent;
  cursor: pointer;

  :hover {
    color: black;
    background-color: white;
  }
`;

interface Props {
  restartGame: (isFinished: boolean) => void;
}

const RestartButton: React.FC<Props> = ({ restartGame }) => {
  return (
    <StyledButton onClick={() => restartGame(false)}>Restart</StyledButton>
  );
};

export default RestartButton;
