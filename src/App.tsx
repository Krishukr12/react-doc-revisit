import { Navbar } from "./components/navbar/Navbar";
import { TicTacToe } from "./pages/tic-tac-toe/TicTacToe-";

export const App = () => {
  return (
    <section>
      <Navbar />
      <section className="min-h-screen flex justify-center items-center">
        <TicTacToe />
      </section>
    </section>
  );
};
