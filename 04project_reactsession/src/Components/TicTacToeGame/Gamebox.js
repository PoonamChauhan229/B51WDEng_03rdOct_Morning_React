import React from 'react'

const Gamebox = ({element,playerClick,id}) => {
console.log(element)
  return (
    <div className='gamebox'
    onClick={()=>playerClick()}    
    >{element}</div>
  )
}

export default Gamebox
// 9 boxes