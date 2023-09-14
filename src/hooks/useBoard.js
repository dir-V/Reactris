import { useEffect, useState } from "react";
import { buildBoard, nextBoard } from "../util/BoardUtil";

export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
}) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  useEffect(() => {
    setBoard((previousBoard) => {
      return nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared,
      });
    });
  }, [player, resetPlayer, addLinesCleared]);

  return [board, player];
};
