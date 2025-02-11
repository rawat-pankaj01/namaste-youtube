import React from 'react'

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
            <img
            className='w-8 h-8'
                alt="user"
                src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            />
            <div className='px-3'>
                <p className='font-bold'> {name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment
