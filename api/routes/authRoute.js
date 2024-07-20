import express from 'express';
import User from '../models/User.js'
import bcrypt from 'bcrypt'
const router=express.Router();
const saltRounds=process.env.SALT_ROUNDS||10;

router.post('/register', async (req, res) => {
    const{name,email,username,password}=req.body;
    try{
        console.log(saltRounds);
        const hash=bcrypt.hashSync(password,saltRounds);
        const userDoc=await User.create({name,email,username,password:hash});
        res.json(userDoc);
    }catch(err){
        console.log(err);
    }
});

router.post('/login',async(req,res)=>{
    const {usernameOrEmail,password}=req.body;
    if(!usernameOrEmail && !password)
    {
        res.status(400).json("require both field ");
    }
    try {
        const userDoc =await User.findOne({$or:[{username:usernameOrEmail},{email:usernameOrEmail}]});
        bcrypt.compare(password, userDoc.password).then(function(result) {
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