import { IoSearch } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetCoversations";
import toast from "react-hot-toast";
import { useState } from "react";
function SearchInput() {
  const[search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations();
  const Submit=(e)=>{
    e.preventDefault();
    if(!search) return ;
    console.log("here");
    if(search.length<3){
      return toast.error("serach term must be at least 3 characters long");
    }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else toast.error("No such user found!");
  }
  return (
    <div>
      <form className="flex bg-transparent items-center gap-2" onSubmit={Submit}>
        <input type='text' placeholder="Search" className="input input-bordered rounded-full bg-transparent" onChange={(e)=>setSearch(e.target.value)}/>
        <button type="submit" className="btn btn-circle bf-sky-500 text-white text-xl">
        <IoSearch />
            </button> 
      </form>
    </div>
  )
}

export default SearchInput
