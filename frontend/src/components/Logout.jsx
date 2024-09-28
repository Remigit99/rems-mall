import {axiosInstance} from "../../lib/axios"
// import { Link } from "react-router-dom"

const Logout = async() => {

    const res = await axiosInstance.post("/auth/logout")
    
    console.log(res.status)
    
    //  <Link to="/">Home</Link>
}

export default Logout