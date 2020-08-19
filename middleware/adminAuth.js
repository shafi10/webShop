const jwt = require('jsonwebtoken')
const config = require('config')

 module.exports = function(req,res,next){
   const token = req.header('x-auth-token');

   if(!token){
       return res.status(401).json({msg:'no token,not authorized'})
   }

   try {
       
    const decoded = jwt.verify(token, config.get('jwtSecret'))
     req.user = decoded.user;
     
     if(req.user.admin == false){
        return res.status(404).json({msg: 'Authentication fail'});
     }

     next()
} catch (error) {
       console.log(error)
   }
 }