import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { User } from "../models/userModel.js"


dotenv.config()
export const protectedRoute = async(req, res, next) =>{

    try {
        //Check if access token exists
        const accessToken = req.cookie.accessToken
        if(!accessToken){
            return res.status(404).json({msg: "Unauthorize - No access Token provided"})
        }

        //Verify and Decode access Token
        const decoded  = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decoded.userId).select(-password)

        if(!user){
            res.status(404).json({msg: "User not found"})
        }

        req.user = user

        next()
    } catch (error) {
        res.status(500).json({msg: "Server Error"})
    }
}

export const adminRoute = async(req, res, next) =>{

    try {
        if(req.user && req.user.role === "admin"){
            next()
        }else{
            res.status(403).json({msg: "Access denied - Admin Only"})
        }
    } catch (error) {
        res.status(500).json({msg: "Something went wrong"})
    }
}