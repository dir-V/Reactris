import React from "react";
import "./Tetris.css";

import Board from "./Board";
import { useBoard } from "../hooks/useBoard";
import GameStats from "./GameStats";

import { useGameStats } from "../hooks/useGameStats";
import Previews from "./Previews";
import { usePlayer } from "../hooks/usePlayer";
import GameController from "./GameController";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setPlayer={setPlayer}
        setGameOver={setGameOver}
      />
    </div>
  );
};

export default Tetris;
