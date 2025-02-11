import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState();
     const dispatch = useDispatch();
    const chatMessages = useSelector(state => state.chat.messages);
    useEffect(()=> {
        const interval = setInterval(()=> {
        dispatch(addMessage({
            name: generateRandomName(),
            message: generateRandomMessage(30)
        }))
        }, 500)
        return () => clearInterval(interval);
    }, [])
  return (
    <>
    <div className='ml-2 p-2 w-full border border-black h-[600px] rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {
            chatMessages.map((chat, index)=> <ChatMessage key={index}  name={chat.name} message={chat.message}/>)
        }
        
    </div>
    <form className='w-full p-2 m-3 border border-black' onSubmit={(e) =>{
        e.preventDefault();
        dispatch(addMessage({
            name: "Test Entry",
            message: liveMessage
        }));
        setLiveMessage("");
    }}>
        <input className='w-96 px-2 border border-black' type="text"
        value={liveMessage}
        onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
    
  )
}

export default LiveChat
