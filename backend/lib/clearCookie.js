import dotenv from "dotenv"

dotenv.config()

export const clearCookies = (res, req) =>{
   
    res.clearCookie("access_token",  {
        httpOnly: true,
        sameSite:  "strict",
        secure: process.env.NODE_ENV === "production"
    })

    res.clearCookie("refresh_token",  {
        httpOnly: true,
        sameSite:  "strict",
        secure: process.env.NODE_ENV === "production"
    })

    res.status(200).json({msg:"User logout successfully"})

}