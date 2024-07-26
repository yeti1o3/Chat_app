import { useState } from "react"
import { Link } from "react-router-dom"
import Checkbox from "../component/Checkbox"
import useSignup from "../hooks/useSignup"
function Signup() {
  const [input,setInput]=useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:'',
  })
  const {loading,signup}=useSignup();
  function setChecked(e){
    setInput({...input,gender:e});
  }

  async function Submit(e){
    e.preventDefault();
    console.log(input)
    await signup(input);

  }

  return (
    <div className="flex flex-col  items-center justify-center min-w-96 mx-auto" >
    <div className="h-full w-full  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100
">
      
        <h1 className="bg-inherit p-10 text-3xl font-semibold text-center text-slate-800">SignUp</h1>
     <form className="bg-inherit flex flex-col items-center" onSubmit={Submit}>
     <input type="text" placeholder="Full Name" className="input input-primary w-4/5 max-w-xs mx-auto m-2" onChange={(e)=>{
      setInput({...input,fullName:e.target.value})
     }}/>
     <input type="text" placeholder="Username" className="input input-primary w-4/5 max-w-xs mx-auto m-2" onChange={(e)=>{
      setInput({...input,username:e.target.value})
     }}/>
     <input type="password" placeholder="Password" className="input input-primary w-4/5 max-w-xs mx-auto m-2" onChange={(e)=>{
      setInput({...input,password:e.target.value})
     }}/>
     <input type="password" placeholder="Confirm Password" className="input input-primary w-4/5 max-w-xs mx-auto m-2" onChange={(e)=>{
      setInput({...input,confirmPassword:e.target.value})
     }}/>
      <Checkbox checked={input.gender} setChecked={setChecked}/>
      <Link to="/login"  className="text-xs text-slate-800">Alredy have an account </Link>
     <button type="submit" disabled={loading} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-2 mb-6">
      {loading? <span className="loading loading-spinner"></span>:"Signup"}
     </button>
     </form>
    </div>
  
</div>
  )
}

export default Signup

