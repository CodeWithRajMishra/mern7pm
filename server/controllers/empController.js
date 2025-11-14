const UserModel = require("../models/userModel");
const ProfileModel = require("../models/profileModel");
const userSave = async (req, res) => {
    const { username, email, fname, lname } = req.body;
    const user = await UserModel.create({
        username: username,
        email: email
    })
    const profile = await ProfileModel.create({
        fname: fname,
        lname: lname,
        userid:user._id
    })
   
    res.send("Data save!!!")
}


const userDisplay=async(req, res)=>{
     const profile = await ProfileModel.find().populate("userid")
     res.send(profile);
}


module.exports = {
    userSave,
    userDisplay
}