import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export const WinningCelebration = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti run={true} numberOfPieces={100} width={width} height={height} />
  );
};
