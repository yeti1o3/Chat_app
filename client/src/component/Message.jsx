import {useAuthContext} from '../context/Authcontext'
import useConversation from '../zustand/useConversation';
import {format} from 'date-fns'
function Message({message}) {
  const {authUser}=useAuthContext();
  
  const {selectedConversation}=useConversation();
  const fromMe=message.senderId===authUser._id;
  const chatClassName =fromMe? 'chat-end':'chat-start';
  const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubbleColor=fromMe?'bg-blue-500':'';
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
        <div className="w-12 rounded-full">
                    <img src={profilePic} alt="user avatar"/>
                </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleColor}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{format(new Date(message.createdAt),'hh:mm')}</div>
    </div>
  )
}

export default Message
