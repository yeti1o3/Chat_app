import { useState } from "react";

function Register(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    function register(ev){
        ev.preventDefault();
    }
    return(
        <>
        <h2>Register</h2>
        <form>
        <input placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onSubmit={register}>
            Register
        </button>
        </form>
        </>
    )
}
export default Register;