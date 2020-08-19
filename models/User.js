const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    date:{
       type:Date,
       default:Date.now 
    }
})

const User = model('User', userSchema)

module.exports= User