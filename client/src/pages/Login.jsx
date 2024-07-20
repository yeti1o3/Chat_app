import {useState} from 'react'

function Login() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    function login(ev){
        ev.preventDefault();

    }
  return (
    <div>
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
