import axios from "axios";
import { useState } from "react"
import { useAuthContext } from "../context/Authcontext";
import toast from "react-hot-toast";
function useLogin() {
  const [loading,setLoading]=useState(false);
  const {setAuthUser} = useAuthContext();
  const login=async(username,password)=>{
    const success=handleInputErrors(username,password);
    if(!success) return;
    setLoading(true)
    try{
        const res=await axios.post("http://localhost:4000/api/auth/login",{username,password},{withCredentials:true});
        const data= res;
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem("chat-user",JSON.stringify(data))
        setAuthUser(data);
    }catch(error){
        toast.error(error.message)
    }finally{
        setLoading(false);
    }
  }
  return {login,loading};
}


export default useLogin

function handleInputErrors(username,password){
    if(!username|| !password){
        toast.error("Please fill in all fields");
        return false;
    }
    return true;
}