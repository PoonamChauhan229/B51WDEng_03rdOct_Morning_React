import  Button  from './Button'
import React from 'react'

const ListItem = ({value,mode,setMode}) => {
  return (
    <div>
      <Button value={value} mode={mode} setMode={setMode}/>
    </div>
  )
}

export default ListItem