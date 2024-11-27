import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json()); // allows us to parse incoming request:req.body
app.use(cookieParser()) //allows us to parse incoming cookies



app.get("/",(req,res)=>{
    res.send("hello")
    
})




app.use("/api/auth",authRoutes)

app.listen(PORT,(req,res)=>{
    connectDB();
    console.log(`port listning at port ${PORT}`);
 
})

// o5DvgoQZSZAZ9hME
