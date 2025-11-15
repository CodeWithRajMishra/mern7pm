const mongoose = require("mongoose");

const bookSchema= new mongoose.Schema ({

    booktitle:String,
    price:Number
})

module.exports= mongoose.model("book", bookSchema);