const bcrypt = require("bcrypt");
const User = require('../Model/User');
require('dotenv').config();
const mongoose = require("mongoose");



module.exports = {
    userDetailes:(req,res)=>{
      try{
        const userId = mongoose.Types.ObjectId(req.body.userId);
        User.findOne({_id:userId}).then((result)=>{
          res.json(result);
        })
      }catch{
        console.log('error');
      }
    }
}