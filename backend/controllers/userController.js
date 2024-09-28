import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";

import { generateTokens } from "../lib/generateTokens.js";

import { setCookies } from "../lib/setCookies.js";
import { clearCookies } from "../lib/clearCookie.js";

export const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // if (!name || !email || !password) {
    // return  res
    //     .status(400)
    //     .json({ success: false, message: "All fields must be filled" });
    // }

    const userExists = await User.findOne({ email });

    if (userExists) {
     return res.status(400).json({ success: false, message: "User Already Exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const { accessToken, refreshToken } = generateTokens(savedUser._id);

    // store generated refreshToken into DB
    savedUser.refreshToken = refreshToken
    await savedUser.save()
    setCookies(res, accessToken, refreshToken);

    console.log(
      savedUser
      // , accessToken, refreshToken
    );

        // Send success response
        return res.status(201).json({
          success: true,
          message: "User created successfully",
          user: savedUser,
        });
    
  } catch (error) {
   return res.status(500).json({ success: false, message: "Error Creating User" });
  }
};

//Login Controller
export const loginController = async (req, res) => {
  const {email, password} = req.body 
  try {
    if(!email || !password){
      res.status(400).json({msg: "Email and  password required"})
    }

    let userExists = await User.findOne({email})
    if(!userExists){
      res.status(404).json({msg: "User Does not Exists"})
    }

    const comparePassword = await bcryptjs.compare(password, userExists.password)
    if(userExists && comparePassword){
      const {accessToken, refreshToken} = generateTokens(userExists._id)
      setCookies(res, accessToken, refreshToken)

      console.log(userExists._doc)

      res.status(200).json({msg:"Login successful"})
    }
  
  } 
  
  catch (error) {
    res.status(500).json({msg: error.message})
  }
};

//Logout Controller
export const logoutController = async(req, res) => {
  const refreshToken = req.cookies.refresh_token

    if(!refreshToken){
        return res.status(400).json({msg: "No refreshToken found"})
    }

    try {
      const  user = await User.findOne({refreshToken}) 
        
      if(!user){
        return res.status(400).json({msg: "user not found"})
      }

      user.refreshToken = null
      await user.save()

       res.clearCookie("refreshToken",  {
        httpOnly: true,
        sameSite:  "None",
        secure: process.env.NODE_ENV === "production"
    })

    return res.status(200).json({success: true, msg: "Logged out Successfully"})

    } catch (error) {
    return res.status(500).json({success: false, msg: "Error during logout"})
        
    }
};
