const mongoose = require("mongoose");

const bookSchema= new mongoose.Schema ({

    booktitle:String,
    price:Number,
    aid:{type:mongoose.Schema.Types.ObjectId, ref:"author"}
})

module.exports= mongoose.model("book", bookSchema);