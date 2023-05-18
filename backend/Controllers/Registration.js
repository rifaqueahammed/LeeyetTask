const mongoose = require("mongoose");
const User = require('../Model/User');


module.exports = {
    userRegistration:(req,res)=>{
        try{
            const userData = req.body;
            User.findOne({
                $or: [
                  { email: userData.email },
                  { phone: userData.phone },
                ],
              }).then(async (result) => {
                if (result) {
                  res.json({ error: "User Already Exist" });
                } 
                else{
                    const salt = await bcrypt.genSalt(10);
                    // now we set user password to hashed password
                    userData.password = await bcrypt.hash(userData.password, salt);
                    const newUser = new User({
                      username: userData.username,
                      email: userData.email,
                      phone: userData.phone,
                      password: userData.password,
                    });
                    newUser.save().then(() => {
                      res.json({success:true});
                    });
                }
            })
        }
        catch{
            console.log('errror');
        }
    },
}