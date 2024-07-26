import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {Routes,Route, Navigate} from 'react-router-dom'
import './styles/App.css'
import {Toaster} from 'react-hot-toast';
import { useAuthContext } from './context/Authcontext'
function App() {
  const {authUser}=useAuthContext();
  return (
 <div className='p-4 h-screen flex items-center justify-center'>
  <Toaster/>
  <Routes>
    <Route path={'/'} element={authUser?<Home/>:<Navigate to="/login"/>}/>
    <Route path={'/login'} element={authUser?<Navigate to="/"/>:<Login/>}/>
    <Route path={'/Signup'} element={authUser?<Navigate to="/"/>:<Signup/>}/>
  </Routes>
 </div>

  )
}

export default App
