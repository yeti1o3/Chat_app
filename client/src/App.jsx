import { BrowserRouter, Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Homepage from "./pages/Homepage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import './styles/App.css'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
