function Message() {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
        <div className="w-12 rounded-full">
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="user avatar"/>
                </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">Hii ! whats app</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message
