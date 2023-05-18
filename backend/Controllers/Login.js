const bcrypt = require("bcrypt");
const User = require('../Model/User');
require('dotenv').config();
const mongoose = require("mongoose");



module.exports = {

    userLogin:async(req,res)=>{
        try{
         const user = await User.findOne({ email: req.body.email });
        if (user) {
              const validPassword = await bcrypt.compare(
              req.body.password,
              user.password);

        if (validPassword) {
            if (user.isBlocked) {
             res.json({error:"User is Blocked"});
            } else {
              const payLoad = {
                id: user._id,
                email: user.email,
                username: user.username,
                phone:user.phone
              }
              const jwtSecretKey = process.env.JWT_SECRET_KEY;
              const token = jwt.sign(payLoad,jwtSecretKey,{ expiresIn: 86400 });
              res.json({auth:true,token:token,id:payLoad.id,payLoad});
           }
       } else {
          res.json({error:"Wrong password"});
      }
      } else {
        res.json({error:"Invalid email"});
      }
        }catch{
            console.log('error');
        }
    },
}