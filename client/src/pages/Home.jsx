import MessageContainer from "../component/MessageContainer"
import Sidebar from "../component/Sidebar"
function Home() {
  return (
    <div className="flex sm:h-[450px] mf:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
    bg-opacity-0">
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home
