import {Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import {Toaster} from "react-hot-toast"





const RootLayout = () => {
  return (
    <main>
        <Navbar/>
        <Outlet/>
        <Toaster/>
    </main>
  )
}

export default RootLayout