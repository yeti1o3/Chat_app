import { useState } from "react";
import { IoSend } from "react-icons/io5";
import sendMessage from "../hooks/useSendMessage";
function MessageInput() {
  const [message,setMessage]=useState('');
  const {loading ,send}=sendMessage();
  function Submit(e){
    e.preventDefault();
    if(!message)return ;
    send(message);
    setMessage("");
  }
  return (
    <form className="px-4 my-3" onSubmit={Submit}>
        <div className="relative w-full">
            <input type="text" 
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3" disabled={loading}>
                {loading?<span className="loading loading-spinner"></span>:<IoSend/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput
