import { SquareProps } from "@/pages/tic-tac-toe/model/square.model";

export const Square = ({
  name,
  handleSquareChange,
  index,
}: SquareProps): JSX.Element => {
  return (
    <button
      onClick={() => handleSquareChange(index)}
      className="border border-fuchsia-600 px-5 py-2"
    >
      {name}
    </button>
  );
};
