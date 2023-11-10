import React, { useContext } from 'react'
import ModeContext from './utils/ModeContext'

const Button = ({value}) => {
  const [mode,setMode]=useContext(ModeContext)
  const styles={
    background:mode=="light"?"green":"navy",
    color:mode=="light"?"white":"white"
  }
  // console.log(mode)
  return (
    <div>
      <button
      style={styles}
      onClick={()=>{
        setMode(value=="Light"?"light":"dark")
        console.log(mode)
      }}
      >{value}Mode

      </button>
    </div>
  )
}

export default Button