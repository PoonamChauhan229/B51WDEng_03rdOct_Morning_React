import React, { useState } from 'react'
import List from './List'
import ModeContext from './utils/ModeContext'

const ThemeUseContext = () => {
  const [mode,setMode]=useState("dark")


  const styles={
    background:mode=="light"?"pink":"black",
    color:mode=="light"?"black":"white"
  }
  return (
    <ModeContext.Provider value={[mode,setMode]}>
    <div className='themebox' style={styles}>
        <List/>
    </div>
    </ModeContext.Provider>
  )
}

export default ThemeUseContext;


// Theme>List>ListIem>Button
// mode and setmode => button