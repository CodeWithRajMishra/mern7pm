const mongoose = require("mongoose");

const studentSchema= new mongoose.Schema ({

    rollno: Number,
    name: String,
    address:String,
    defaultImage:String,
    images:[String]
})

module.exports= mongoose.model("student", studentSchema);