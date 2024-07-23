import {useState} from 'react'
import '../styles/Login.css'
import axios from 'axios';
function Login() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    function login(ev){
        ev.preventDefault();
        axios.post('http://localhost:4000/login',{usernameOrEmail:username,password}).then((res)=>{
            console.log(res)
        })

    }
  return (
    <div className='Login'>
        <h2>Login</h2>
        <form onSubmit={login}>
        <input placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button>Login</button>
        </form>
    </div>
  )
}

export default Login
