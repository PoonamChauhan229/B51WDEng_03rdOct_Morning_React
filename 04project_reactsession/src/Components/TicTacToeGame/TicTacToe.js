import React, { useState } from 'react'
import Gamebox from './Gamebox'
import Board from './Board'

const TicTacToe = () => {
    const [boardVal,setBoardVal]=useState([
        // "X","X","X","X","X","X","X","X","X",
        // "O","O","O","O","O","O","O","O","O",
        null,null,null,null,null,null,null,null,null
    ])
  return (
    <div>
        <Board boardVal={boardVal} setBoardVal={setBoardVal}/>
    </div>
  )
}

export default TicTacToe

// Board component =>GameBox
//GameBox Compnent => 1single box
// TicTacToe =>  Board Component=>Gamebox

// 3*3=? 9
// GameBox(1box)=>     TicTacToe.js