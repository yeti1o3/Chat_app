import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import connectDB from './DBconnectoin.js';
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js';
import { app,server } from './socket/socket.js';
dotenv.config();
const port=process.env.PORT||4000;


app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));


connectDB();


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes)

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})