import React, { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Borad from "./components/Board";
import Timer from "./components/Timer";
import styled from "styled-components";
import RestartButton from "./components/RestartButton";

const StyledResults = styled.div`
  background-color: rgba(1, 1, 1, 0.5);
  color: white;

  p {
    @keyframes rotateCircle {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes mymove {
      from {
        color: black;
        font-size: 2rem;
      }
      to {
        color: white;
        font-size: 6rem;
      }
    }

    @keyframes mymoveBig {
      from {
        transform: rotate(0deg);
        color: black;
        font-size: 4rem;
      }
      to {
        transform: rotate(360deg);
        color: white;
        font-size: 9rem;
      }
    }

    animation-name: mymove;

    @media only screen and (min-width: 992px) {
      animation-name: mymoveBig;
    }

    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  z-index: 10000;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  const [time, setTime] = useState<number>(4);
  const [gameOver, setGameOver] = useState(false);

  const [winner, setWinner] = useState<number>(0);

  const [playerNo, setPlayerNo] = useState<number>(1);

  const results = (result: number): string => {
    switch (result) {
      case 0:
        return "Tie";
        break;
      case 1:
        return "Player One (X) win";
        break;
      case 2:
        return "Player Two (O) win";
        break;
      default:
        return "Tie";
    }
  };

  const restartGame = (isFinished: boolean): void => {
    setGameOver(isFinished);
    if (!isFinished) {
      setTime(4);
    }
  };

  useEffect(() => {
    console.log("time");
    const timer = setInterval(() => {
      if (time === 0) {
        clearInterval(timer);
      } else {
        setTime((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      console.log("gg");
      return clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="App">
      <header className="App-header">
        {time <= 1 && (
          <Borad
            restartGame={restartGame}
            playerNo={playerNo}
            setPlayerNo={setPlayerNo}
            setWinner={setWinner}
          />
        )}
        {gameOver && (
          <StyledResults>
            <p>{results(winner)}</p>
            <RestartButton restartGame={restartGame} />
          </StyledResults>
        )}
      </header>
      {time > 0 && <Timer time={time} />}
    </div>
  );
}

export default App;
