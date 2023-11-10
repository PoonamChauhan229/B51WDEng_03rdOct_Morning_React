import React, { useState } from 'react'
import Gamebox from './Gamebox'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'


const Board = ({boardVal,setBoardVal}) => {
    const { width, height } = useWindowSize()

    // 2 players
    // X O
    const [isXturn,setisXturn]=useState(true)

    // Update x or o val
    const handleClick=(index)=>{
        console.log(index)

        // if(boardVal[index]==null){
        //     //true?"X":"O"
        //     boardVal[index]=isXturn?"X":"O"
        //     console.log(boardVal)
        // }
        const boardValCopy=[...boardVal]
        if(boardVal[index]==null){
            boardValCopy[index]=isXturn?"X":"O"
            setBoardVal(boardValCopy)
            setisXturn(!isXturn)//false
        }

    }

    // Deciding the Winner
    const decideWinner=(boardVal)=>{
        // Possibility of Winning
        const listItems=[
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]

        for(let i=0;i<listItems.length;i++){
            // destructure
            const[a,b,c]=listItems[i]
            if(boardVal[a]!==null && boardVal[a]==boardVal[b] && boardVal[b]==boardVal[c] ){
                console.log("Winner")
                return boardVal[a]
            }
        }
        return null;
    }
    const winner =decideWinner(boardVal)
  return (
    <>

    {winner && <Confetti width={width}height={height} gravity={0.02}/>}
    <div className='board'>
       
       {boardVal.map((element,index)=><Gamebox element={element} id={index} key={index}
       playerClick={()=>handleClick(index)}

       /> )}
    </div>
    
    {winner &&  <h2 className='winner'>Winner is Player:{winner}</h2> }
    </>
  )
}

export default Board