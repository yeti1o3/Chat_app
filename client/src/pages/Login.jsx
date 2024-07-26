import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin";

function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const {loading,login}=useLogin();
  async function Submit(e){
    e.preventDefault();
    await login(username,password);
  }
  return (
    <div className="flex flex-col  items-center justify-center min-w-96 mx-auto" >
        <div className="h-full w-full  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100
">
          
            <h1 className="bg-inherit p-10 text-3xl font-semibold text-center text-slate-800">Login</h1>
         <form className="bg-inherit flex flex-col items-center" onSubmit={Submit}>
         <input type="text" placeholder="Username" className="input input-primary w-4/5 max-w-xs mx-auto m-2" onChange={(e)=>{setUsername(e.target.value)}}/>
         <input type="text" placeholder="Password" className="input input-primary w-4/5 max-w-xs mx-auto m-2"  onChange={(e)=>{setPassword(e.target.value)}}/>
         <Link className="bg-transparent decoration-transparent text-left text-slate-800 text-xs" to="/Signup">{"Don't"} have an account</Link>
         <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-2 mb-6" disabled={loading}>
          {loading?<span className="loading loading-spinner"></span>:"Login"}
         </button>
         </form>
        </div>
      
    </div>
  )
}

export default Login
