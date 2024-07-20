import mongoose from "mongoose";
async function connectDB(){
try{
    await mongoose.connect(process.env.DB_CONNECTION_STRING,);
    console.log("connected to database");
}catch(err){
    console.log("connection failed",err);
}
}
export default connectDB;