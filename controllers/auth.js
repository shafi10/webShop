const User = require('../models/User');

const {validationResult} = require('express-validator/check')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')


exports.postRegistration = async (req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    }
     
    const {name, email, password, address,phone} = req.body
    try {
       let user= await User.findOne({email})
       if(user){
          return res.status(400).json({errors: [{ msg: 'user exists'}]})
       }


        user = new User({
            name,email,password,address,phone
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password , salt)
         await user.save()
         res.json({msg:"User created Successful"})
    } catch (error) {
        console.log(error)
    }
} 


exports.postLogin = async (req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    }
     
    const {email, password} = req.body
    try {
       let user= await User.findOne({email})
       if(!user){
          return res.status(400).json({errors: [{ msg: 'Invalid'}]})
       }

    let isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({errors: [{ msg: 'Invalid'}]})
     }
     
         const payload = {
             user:{
                 id:user.id,
                 admin:user.isAdmin
             }
         }
     
         jwt.sign(payload, config.get('jwtSecret'),{
             expiresIn:360000
         }, (err, token)=>{
             if(err) throw err;
             res.json({ token })
         })
    } catch (error) {
        console.log(error)
    }
} 


exports.getUser = async (req,res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

