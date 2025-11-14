const express = require("express");
const app=express();
const EmpRoute = require("./routes/empRoute");
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");
require("dotenv").config();
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB Succesfully Connected!");
})
console.log(process.env.DBCONN);
app.use(cors());
app.use("/employees", EmpRoute);




const Port = process.env.PORT ;
app.listen(Port, ()=>{
    console.log(`Server run on Port ${Port}`);
})