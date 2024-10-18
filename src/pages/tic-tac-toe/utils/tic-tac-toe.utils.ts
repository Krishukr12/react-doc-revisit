import { Player } from "../model/square.model";

export const isSomeOneWonGame = (currentBoard: string[]): boolean => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      currentBoard[a] &&
      currentBoard[a] === currentBoard[b] &&
      currentBoard[a] === currentBoard[c]
    ) {
      return true;
    }
  }

  return false;
};

export const isGameOvered = (currentBoard: Player[]): boolean => {
  return !currentBoard.includes("");
};
