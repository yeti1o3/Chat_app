import mongoose from "mongoose";
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    profilePic:{
        type:String,
        default:"",
    }
},{timestamps:true});

const User = mongoose.model('User', UserSchema);

export default User;