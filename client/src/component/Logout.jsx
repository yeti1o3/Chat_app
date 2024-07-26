import { SlLogout } from "react-icons/sl";
import useLogout from "../hooks/useLogout";
function Logout() {
  const {loading,logout}=useLogout();
  return (
    <div className="mt-auto">
      {!loading?(
              <SlLogout className="w-6 h-6 text-white cursor-pointer"
              onClick={logout}/>
      ):(<span className="loading loading-spinner"></span>)}
    </div>
  )
}

export default Logout
