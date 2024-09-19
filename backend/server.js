import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import router from "./routes/router.js"
import { connectDb } from "./lib/db.js"
dotenv.config()

const app = express()
app.use(cookieParser())

app.use(express.json())

const PORT = 4000

connectDb()
app.use("/api/auth", router)



app. listen(PORT, () => console.log(`Server running on port ${PORT}`))
