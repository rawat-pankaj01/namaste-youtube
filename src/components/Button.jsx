import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 m-5 rounded-lg bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button
