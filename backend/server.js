import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import router from "./routes/router.js"
import { connectDb } from "./lib/db.js"
import productRoutes from "./routes/productRoutes.js"
dotenv.config()

const app = express()
app.use(cors(
    {
        origin: 'http://localhost:5173', 
        credentials: true, // Allow credentials (cookies, authentication, etc.)
      }
))
app.use(cookieParser())

app.use(express.json())

const PORT = 4000

connectDb()
app.use("/api/auth", router)
app.use("/api/products", productRoutes)


app. listen(PORT, () => console.log(`Server running on port ${PORT}`))
