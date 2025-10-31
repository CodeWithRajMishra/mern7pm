const express = require("express");
const app=express();
const EmpRoute = require("./routes/empRoute");
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/ushadb").then(()=>{
    console.log("DB Succesfully Connected!");
})

app.use(cors());

app.use("/employees", EmpRoute);
app.listen(8000, ()=>{
    console.log("Server run on Port 8000");
})