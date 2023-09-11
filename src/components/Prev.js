import React from "react";
import { buildBoard } from "../util/BoardUtil";
import BoardCell from "./BoardCell";
import { transferToBoard } from "../util/Tetrominoes";
import "./Prev.css";

export const Prev = ({ tetromino, index }) => {
  const { shape, className } = tetromino;
  const board = buildBoard({ rows: 4, columns: 4 });
  const style = { top: `${index * 15}vw` };

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape
  });
  return (
    <div className="Prev" style={style}>
      <div className="Prev-board">
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};
