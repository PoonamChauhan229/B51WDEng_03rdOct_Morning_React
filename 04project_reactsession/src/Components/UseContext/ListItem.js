import  Button  from './Button'
import React, { useContext } from 'react'
import ModeContext from './utils/ModeContext'

const ListItem = ({value}) => {
  const [mode,setMode]=useContext(ModeContext)
  return (
    <div>
      {mode}
      <Button value={value}/>
    </div>
  )
}

export default ListItem