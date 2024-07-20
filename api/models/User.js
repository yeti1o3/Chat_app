import mongoose from "mongoose";
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    name:{type:String,required:true},
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    avtar:{type:String}
},{timestamps:true});

const User = mongoose.model('User', UserSchema);

export default User;