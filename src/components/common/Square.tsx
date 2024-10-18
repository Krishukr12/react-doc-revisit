import { SquareProps } from "@/pages/tic-tac-toe/model/square.model";
import React from "react";

export const Square = React.memo(
  ({ name, handleSquareChange, index }: SquareProps): JSX.Element => {
    return (
      <button
        onClick={() => handleSquareChange(index)}
        className="border border-black h-16 w-16"
      >
        {name}
      </button>
    );
  }
);
