import { useEffect,useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
const  useGetConversations=()=>{
    const [loading,setLoading]=useState(false);
    const [conversations,setConversations]=useState([]);
    useEffect(()=>{
        const getConversations=async()=>{
            setLoading(true);
            try{
                const res=await axios.get('http://localhost:4000/api/users',{withCredentials:true});
                const data=res.data;
                if(res.error){
                            throw new Error(data.error);
                }
                setConversations(data);
            }catch(error){
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }
        getConversations();
    },[]);
    return {loading,conversations};
}
export default useGetConversations;