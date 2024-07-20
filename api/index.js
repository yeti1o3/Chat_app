import express from 'express';
import dotenv from 'dotenv';
import connectDB from './DBconnectoin.js';
import authRoute from './routes/authRoute.js'
dotenv.config();


connectDB();
const port=process.env.PORT||4000;
const app=express();
app.use('/',authRoute);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})