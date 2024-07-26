import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/Authcontext";
import toast from "react-hot-toast";
const useLogout=()=>{
    const[loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext();
    const logout=async ()=>{
        setLoading(true)
        try{
            const res= await axios.post("http://localhost:4000/api/auth/logout",{},{withCredentials:true});
            const data=res;
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.removeItem("chat-user");
            setAuthUser(null);
        }catch(error){
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }
    return {loading,logout};
}
export default useLogout;