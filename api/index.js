import express from 'express';
import dotenv from 'dotenv';
import connectDB from './DBconnectoin.js';
import authRoute from './routes/authRoute.js'
import cors from 'cors';
dotenv.config();
const app=express();
const port=process.env.PORT||4000;
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use(express.json());

connectDB();


app.use('/',authRoute);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})