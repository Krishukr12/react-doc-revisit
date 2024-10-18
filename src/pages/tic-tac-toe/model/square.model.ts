export interface SquareProps {
  name: string;
  index: number;
  handleSquareChange: (index: number) => void;
}
export type Player = "X" | "O" | "";
