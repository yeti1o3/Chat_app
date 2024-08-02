import { useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios';
import { useAuthContext } from "../context/Authcontext";
function useSignup() {
  const [loading,setLoading]=useState(false);
  const {setAuthUser}=useAuthContext();

  const signup=async({fullName,username,password,confirmPassword,gender})=>{
    const success=handleInputErrors({fullName,username,password,confirmPassword,gender});
    if(!success) return ;
  try{
    const res=await axios.post('http://localhost:4000/api/auth/signup',{fullName,username,password,confirmPassword,gender},{withCredentials:true})
    const data=res.data;
    if(data.error){
        throw new Error(data.error);
    }

    localStorage.setItem("chat-user",JSON.stringify(data));
    setAuthUser(data);
  }catch(error){
    toast.error(error.response.data.error);
  }finally{
    setLoading(false);
  }}
  return {loading,signup};
}


export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName||!username||!password||!confirmPassword||!gender)
  {
    toast.error("Please fill in all fields");
    return false;
  }
  if(password!==confirmPassword){
    toast.error("password do not match");
    return false;
  }
  if(password.length<6){
    toast.error('password must be at least 6 character')
    return false;
  }
  return true;
}