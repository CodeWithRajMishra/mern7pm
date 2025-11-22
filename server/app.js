const express = require("express");
const app=express();
const EmpRoute = require("./routes/empRoute");
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");
const multer = require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("./cloudinary");

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

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'product_images', // folder name Cloudinary account
        format: async (req, file) => 'jpg', // supports promises as well
        public_id: (req, file) => Date.now() + '-' + file.originalname,
    },
});


const upload = multer({ storage: storage }).array('images', 10); //image size



app.post("/upload",  (req, res)=>{

          upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send("Error uploading files: " + err.message);
        }


         console.log(req.body);
         console.log(req.files);
         const imagePath = req.files.map(key=>key.path);
         console.log(imagePath);



}) ;
  

     res.send("File Uploaded!!!");
})




const Port = process.env.PORT ;
app.listen(Port, ()=>{
    console.log(`Server run on Port ${Port}`);
})