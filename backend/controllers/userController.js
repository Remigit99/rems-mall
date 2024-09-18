import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res
        .status(400)
        .json({ success: false, message: "All fields must be filled" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ success: false, message: "User Already Exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser)
  } catch (error) {
    res.status(500).json({success: false, message: "Error Creating User"})
  }
};
