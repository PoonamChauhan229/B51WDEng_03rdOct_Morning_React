import React from 'react'
import ListItem from './ListItem'

const List = () => {
  return (
    <div style={{display:"flex",gap:"20px"}}> 
      <ListItem value="Light" />
      <ListItem value="Dark" />
    </div>
  )
}

export default List