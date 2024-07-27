import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import useConversation from "../zustand/useConversation";
const sendMessage=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[loading,setLoading]=useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {selectedConversation,messages,setMessages}=useConversation();
    const send= async(message)=>{
        console.log("here")
        setLoading(true);
    try{
        const res=await axios.post(`http://localhost:4000/api/messages/send/${selectedConversation._id}`,{message},{withCredentials:true})
        if(res.error)
        {
            throw new Error(res.error);
        }
        const data=res.data;
        setMessages([...messages,data]);
    }catch(error){
        toast.error(error);
    }finally{
        setLoading(false)
    }
    }
    return {loading,send};
}

export default sendMessage;