import { useState } from "react";
import axios from 'axios'
function Register(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    function register(ev){
        ev.preventDefault();
        axios.post('http://localhost:4000/register',{name:name,email:email,username:username,password:password})
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log("error occured",err);
        })
    }
    return(
        <>
        <h2>Register</h2>
        <form onSubmit={register}>
        <input placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="submit">
            Register
        </button>
        </form>
        </>
    )
}
export default Register;