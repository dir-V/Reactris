import React from 'react'
import "./GameController.css"
import { Action, actionForKey } from '../util/Input'
import { playerController } from '../util/PlayerController'
import { useInterval } from '../hooks/useInterval'
import { useDropTime } from '../hooks/useDropTime'
const GameController = ({ board, gameStats, player, setPlayer, setGameOver}) => {

    const[dropTime, pauseDropTime, resumeDropTime] = useDropTime({ 
        gameStats
    });

    useInterval(() => {
        handleInput({ action: Action.SlowDrop })
    }, dropTime);

    const onKeyUp =({ code }) => {
        const action = actionForKey(code);
        if(action == Action.Quit){
            setGameOver(true);
        }
    }
    const onKeyDown =({ code }) => {
        const action = actionForKey(code);
        handleInput({ action} );
    }
    const handleInput =({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        })
    }
  return (
    <input 
    className='GameController' 
    type = 'text'
    onKeyDown={onKeyDown}
    onKeyUp={onKeyUp}
    autoFocus
    />
  )
}

export default GameController