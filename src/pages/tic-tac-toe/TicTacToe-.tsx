import { Square } from "@/components/common/Square";
import { useState, useMemo } from "react";
import { isGameOvered, isSomeOneWonGame } from "./utils/tic-tac-toe.utils";
import { Player } from "./model/square.model";
import { O, X } from "./constant";
import { WinningCelebration } from "@/components/common/WinningCelebration";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const initializeInitialSquare = () => Array(9).fill("");

export const TicTacToe = (): JSX.Element => {
  const [isCurrentStringX, setIsCurrentStringX] = useState<boolean>(true);
  const [squareNumber, setSquareNumber] = useState<Player[]>(
    initializeInitialSquare
  );

  const hasSomeoneWon = useMemo(
    () => isSomeOneWonGame(squareNumber),
    [squareNumber]
  );
  const isGameOver = useMemo(() => isGameOvered(squareNumber), [squareNumber]);

  const handleSquareChange = (index: number): void => {
    if (squareNumber[index] === "" && !hasSomeoneWon) {
      const newSquare = [...squareNumber];
      newSquare[index] = isCurrentStringX ? X : O;
      setSquareNumber(newSquare);
      setIsCurrentStringX(!isCurrentStringX);
    }
  };

  const resetGame = () => {
    setSquareNumber(initializeInitialSquare);
    setIsCurrentStringX(true);
  };

  return (
    <section className="flex gap-2 flex-col">
      <section className="grid grid-cols-3 rounded-sm">
        {squareNumber.map((square, index) => (
          <Square
            key={index}
            name={square}
            index={index}
            handleSquareChange={handleSquareChange}
          />
        ))}
      </section>
      <section>
        {hasSomeoneWon && (
          <section>
            <Button variant="secondary" onClick={resetGame}>
              <RotateCcw />
            </Button>
            <WinningCelebration />
          </section>
        )}
        {isGameOver && !hasSomeoneWon && (
          <Button variant="secondary" onClick={resetGame}>
            <RotateCcw />
          </Button>
        )}
      </section>
    </section>
  );
};
