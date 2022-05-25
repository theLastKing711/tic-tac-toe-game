import styled from "styled-components";

interface Props {
  time: number;
}

const StyledTimer = styled.div`
  background-color: rgba(1, 1, 1, 0.5);
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;

  span {
    @keyframes timerCount {
      from {
        color: black;
        font-size: 1rem;
      }
      to {
        color: white;
        font-size: 16rem;
      }
    }
    animation-name: timerCount;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
`;

const Timer: React.FC<Props> = ({ time }) => {
  return (
    <StyledTimer>
      <span key={time}>{time === 1 ? "GO" : time - 1}</span>
    </StyledTimer>
  );
};

export default Timer;
