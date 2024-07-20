import { Outlet } from "react-router"
import Header from "./component/Header"
function Layout() {
  return (
    <main>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default Layout
