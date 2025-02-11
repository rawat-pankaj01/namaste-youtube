import React from 'react'

import Button from './Button'
const list =["All", "Gaming", "Songs", "Soccer", "Cricket", "Cooking"]
const ButtonsList = () => {
  return (
    <div className='flex'>
      {list.map((item)=> (
        <Button key={item} name={item}/>
      ))}
      
     
    </div>
  )
}

export default ButtonsList
