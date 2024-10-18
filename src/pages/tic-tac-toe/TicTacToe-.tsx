import { Square } from "@/components/common/Square";
import { useState } from "react";
import { isSomeOneWonGame } from "./utils/tic-tac-toe.utils";
import { Player } from "./model/square.model";
import { O, X } from "./constant";

const initializeInitialSquare = () => {
  return Array(9).fill("");
};

export const TicTacToe = (): JSX.Element => {
  const [isCurrentStringX, setIsCurrentStringX] = useState<boolean>(true);
  const [SquareNumber, setSquareNumber] = useState<Player[]>(
    initializeInitialSquare
  );

  const handleSquareChange = (index: number): void => {
    if (SquareNumber[index] === "" && !isSomeOneWonGame(SquareNumber)) {
      const newSquare = [...SquareNumber];
      newSquare[index] = isCurrentStringX ? X : O;
      setSquareNumber(newSquare);
      setIsCurrentStringX(!isCurrentStringX);

      // check - some one won the game
      if (isSomeOneWonGame(newSquare)) {
        alert(isCurrentStringX ? X : O);
        return;
      }
    }
  };

  return (
    <section className="grid grid-cols-3 rounded-sm">
      {SquareNumber &&
        SquareNumber.map((square, index) => (
          <Square
            key={index}
            name={square}
            index={index}
            handleSquareChange={handleSquareChange}
          />
        ))}
    </section>
  );
};
