import express from "express";
import { signupController, loginController, logoutController } from "../controllers/userController.js";

const router = express.Router()

router.post("/signup", signupController)

//Login router
router.post("/login", loginController)

//Logout router
router.post("/logout", logoutController)


export default router