import {Link} from 'react-router-dom'
import '../styles/Header.css'
function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to={'/'}>Chit-Chat</Link>
      </div>
      <div className='headerOptions'>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
      </div>
    </div>
  )
}

export default Header
