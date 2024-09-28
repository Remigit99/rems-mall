import dotenv from "dotenv"
import {User} from "../models/userModel.js"

dotenv.config()

export const clearCookies = async(res, req) =>{

    // const refreshToken = req.cookie.refresh_token

    // if(!refreshToken){
    //     return res.status(400).json({msg: "No refreshToken found"})
    // }

    // try {
    //   const  user = await User.findOne({refreshToken}) 
        
    //   if(!user){
    //     return res.status(400).json({msg: "user not found"})
    //   }

    //   user.refreshToken = null
    //   await user.save()

    //    res.clearCookie("refreshToken",  {
    //     httpOnly: true,
    //     sameSite:  "None",
    //     secure: process.env.NODE_ENV === "production"
    // })

    // return res.status(200).json({success: true, msg: "Logged out Successfully"})

    // } catch (error) {
    // return res.status(500).json({success: false, msg: "Error during logout"})
        
    // }
   
    // res.clearCookie("access_token",  {
    //     httpOnly: true,
    //     sameSite:  "strict",
    //     secure: process.env.NODE_ENV === "production"
    // })

   
    // res.status(200).json({msg:"User logout successfully"})

}