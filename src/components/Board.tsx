import React, { useEffect, useState } from "react";
import styled from "styled-components";
import boardItem from "../models/boradItem";
import Field from "./Field";
import RestartButton from "./RestartButton";

const StyeldBoard = styled.div`
  background-color: blue;
  width: 90vw;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 25vh);
  border-collapse: collapse;
`;

const initBoard = (): boardItem[] => {
  const arr = Array.from({ length: 9 }, (v, i) => {
    return { id: i, letter: null, isDone: false, player: null };
  });

  return arr;
};

interface Props {
  restartGame: (isFinished: boolean) => void;
  playerNo: number;
  setPlayerNo: React.Dispatch<React.SetStateAction<number>>;
  setWinner: React.Dispatch<React.SetStateAction<number>>;
}

const Borad: React.FC<Props> = ({
  restartGame,
  playerNo,
  setPlayerNo,
  setWinner,
}) => {
  const [fields, setFields] = useState<boardItem[]>(initBoard());
  const [winFields, setWinFields] = useState<number[]>([]);

  const changeTurn = (): void => {
    setPlayerNo(playerNo === 1 ? 2 : 1);
  };

  const resetBoard = (): void => {
    setFields(initBoard());
  };

  const handleFieldClicked = (id: number): void => {
    let field = fields.find((item) => item.id === id);

    if (field?.letter) {
      return;
    }

    let newFieldsState = fields.map((item) =>
      item.id === id
        ? {
            ...item,
            playerNo,
            isDone: true,
            letter: playerNo === 1 ? "X" : "O",
          }
        : { ...item }
    );

    setFields(newFieldsState);

    changeTurn();
  };

  useEffect(() => {
    if (
      fields[0].letter === "X" &&
      fields[1].letter === "X" &&
      fields[2].letter === "X"
    ) {
      setWinFields([0, 1, 2]);
      setWinner(1);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[3].letter === "X" &&
      fields[4].letter === "X" &&
      fields[5].letter === "X"
    ) {
      setWinFields([3, 4, 5]);
      setWinner(1);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[6].letter === "X" &&
      fields[7].letter === "X" &&
      fields[8].letter === "X"
    ) {
      setWinFields([6, 7, 8]);
      setWinner(1);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[0].letter === "X" &&
      fields[3].letter === "X" &&
      fields[6].letter === "X"
    ) {
      setWinFields([0, 3, 6]);
      setWinner(1);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[1].letter === "X" &&
      fields[4].letter === "X" &&
      fields[7].letter === "X"
    ) {
      setWinFields([1, 4, 7]);
      setWinner(1);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[2].letter === "X" &&
      fields[5].letter === "X" &&
      fields[8].letter === "X"
    ) {
      setWinFields([2, 5, 8]);
      setWinner(1);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[0].letter === "X" &&
      fields[4].letter === "X" &&
      fields[8].letter === "X"
    ) {
      setWinFields([0, 4, 8]);
      setWinner(1);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[2].letter === "X" &&
      fields[4].letter === "X" &&
      fields[6].letter === "X"
    ) {
      setWinFields([2, 4, 6]);
      setWinner(1);
      // resetBoard();
      restartGame(true);
      return;
      return;
    }

    if (
      fields[0].letter === "O" &&
      fields[1].letter === "O" &&
      fields[2].letter === "O"
    ) {
      setWinFields([0, 1, 2]);
      setWinner(2);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[3].letter === "O" &&
      fields[4].letter === "O" &&
      fields[5].letter === "O"
    ) {
      setWinFields([3, 4, 5]);
      setWinner(2);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[6].letter === "O" &&
      fields[7].letter === "O" &&
      fields[8].letter === "O"
    ) {
      setWinFields([6, 7, 8]);
      setWinner(2);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[0].letter === "O" &&
      fields[3].letter === "O" &&
      fields[6].letter === "O"
    ) {
      setWinFields([0, 3, 6]);
      setWinner(2);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[1].letter === "O" &&
      fields[4].letter === "O" &&
      fields[7].letter === "O"
    ) {
      setWinFields([1, 4, 7]);
      setWinner(2);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[2].letter === "O" &&
      fields[5].letter === "O" &&
      fields[8].letter === "O"
    ) {
      setWinFields([2, 5, 8]);
      setWinner(2);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[0].letter === "O" &&
      fields[4].letter === "O" &&
      fields[8].letter === "O"
    ) {
      setWinFields([0, 4, 8]);
      setWinner(2);
      // resetBoard();
      restartGame(true);
      return;
    }
    if (
      fields[2].letter === "O" &&
      fields[4].letter === "O" &&
      fields[6].letter === "O"
    ) {
      setWinFields([2, 4, 6]);
      setWinner(2);
      // resetBoard();
      restartGame(true);
      return;
    }

    const isGameOver = fields.filter((item) => item.letter !== null);

    if (isGameOver.length === 9) {
      // resetBoard();
      restartGame(true);

      setWinner(0);
    }
  }, [playerNo]);

  return (
    <div>
      <StyeldBoard>
        {fields.map((item, index) => (
          <Field
            {...(item as boardItem)}
            key={item.id}
            fieldClicked={handleFieldClicked}
            winFields={winFields}
          />
        ))}
      </StyeldBoard>
      <div className="test">
        <h2>Player {playerNo === 1 ? "One (X) " : "Two (O) "}Turn</h2>
        <RestartButton restartGame={restartGame} />
      </div>
    </div>
  );
};

export default Borad;
