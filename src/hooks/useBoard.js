import { useState } from "react";
import { buildBoard } from "../util/BoardUtil";


export const useBoard = ({ rows, columns }) => {
    const [board, setBoard] = useState(buildBoard({ rows, columns }));


    return [board, setBoard];
}