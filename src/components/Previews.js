import React from 'react'
import { Prev } from './Prev';

const Previews = ({ tetrominoes }) => {

    const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();
  return (
    <>
    {previewTetrominoes.map((tetromino, index) =>(
        <Prev tetromino={tetromino} index={index} key={index}/>
    ))}
    </>
  )
}

export default React.memo(Previews);