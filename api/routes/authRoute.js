import express from 'express';
import User from '../models/User.js'
import bcrypt from 'bcrypt'
const router=express.Router();
const saltRounds=process.env.SALT_ROUNDS;
router.post('/register',async(req,res)=>{
    const {name,username,email,password}=req.body;
    if(!username || !password){
        res.json("require username and password");
    }
    const userDoc=await User.create({name,username,email,password:bcrypt.hashSync(password,saltRounds)},{timestamps:true});
    res.json(userDoc);
})
router.post('/login',async(req,res)=>{
    const {usernameOrEmail,password}=req.body;
    if(!username && !password)
    {
        res.status(400).json("require both field ");
    }
    try {
        const userDoc =await User.findOne({$or:[{username:username},{email:username}]});
        bcrypt.compare(password, userDoc).then(function(result) {
            if(result)
            {
                res.json("password match");
            }
        }).catch((err)=>{
            res.json("password dosn't match");
        });
    }catch{
        res.json("error finding user");
    }
    
})
export default router;