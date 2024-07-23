import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import connectDB from './DBconnectoin.js';
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'

dotenv.config();
const port=process.env.PORT||4000;

const app=express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));


connectDB();


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})