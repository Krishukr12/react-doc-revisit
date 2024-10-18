import { Square } from "@/components/common/Square";
import { useState } from "react";

const initializeInitialSquare = () => {
  return Array(9).fill("X");
};

export const TicTacToe = (): JSX.Element => {
  const [SquareNumber, setSquareNumber] = useState(initializeInitialSquare);

  return (
    <section className="grid grid-cols-3 rounded-sm">
      {SquareNumber &&
        SquareNumber.map((square, index) => (
          <Square key={index} name={square} index={index} />
        ))}
    </section>
  );
};
