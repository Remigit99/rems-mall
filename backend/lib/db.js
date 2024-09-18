import mongoose from "mongoose";

export const connectDb = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connect to ${conn.connection.host}`);
            
    } catch (error) {
    console.log("Error connection to Db", error)    
    }
    
}