import { SquareProps } from "@/pages/tic-tac-toe/model/square.model";

export const Square = ({ name, index }: SquareProps): JSX.Element => {
  
  const handleSquareClick = (): void => {
    alert(index);
  };

  return (
    <button
      onClick={handleSquareClick}
      className="border border-fuchsia-600 px-5 py-2"
    >
      {name}
    </button>
  );
};
