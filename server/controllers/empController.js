const EmpModel = require("../models/empModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const empSave = async (req, res) => {
    const { username, email, password }= req.body
    const passwordHash =  await bcrypt.hash(password, 10);
    
    const user= await EmpModel.create({
          username:username,
    email:email,
    password:passwordHash
    })

  

    res.send("You are Succesfully Registered!!")


}

const empLogin=async(req, res )=>{
    const { email, password} = req.body;
    
     const user = await EmpModel.findOne({email:email});
     if (!user)
     {
        res.status(401).send({msg:"Invalid Email"});
     }

     const passwordMatch =  await bcrypt.compare(password, user.password);
     console.log(passwordMatch);
     if (!passwordMatch)
     {
         res.status(401).send({msg:"Invalid Password"});
     }

     
    const token = jwt.sign({ id:user._id }, "reshu111", {
    expiresIn: 3 * 24 * 60 * 60,
  });

    console.log(token);
     res.send({token: token, msg:"You are succesfully Login"});
}

module.exports = {
    empSave,
    empLogin
}