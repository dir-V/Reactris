import { useCallback, useEffect, useState } from "react";


const defaultDropTime = 1000;
const minDropTime = 100;
const increment = 50;
export const useDropTime = ({ gameStats }) => {
    const[dropTime, setDropTime] = useState(defaultDropTime);
    const[previousDropTime, setPreviousDropTime] = useState();

    const resumeDropTime = useCallback(() =>{
        if(!previousDropTime){
            return;
        }
        setDropTime(previousDropTime);
        setPreviousDropTime(null);
    }, [previousDropTime]);

    const pauseDropTime = useCallback(() => {
        if(dropTime){
            setPreviousDropTime(dropTime);
        }
        setDropTime(null);
    }, [dropTime, setPreviousDropTime]);


    useEffect(() => {
        const speed = increment * (gameStats.level -1);
        const newDropTime = Math.max(defaultDropTime - speed, minDropTime);

        setDropTime(newDropTime);
    }, [gameStats.level, setDropTime])

    return[dropTime, pauseDropTime, resumeDropTime]
}