const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");
const userSave = async (req, res) => {
    console.log(req.body);
    const { name, address, booktitle, price } = req.body;
    const author = await AuthorModel.create({
        name: name,
        address: address
    })
    const book = await BookModel.create({
        booktitle: booktitle,
        price: price
    })
    await AuthorModel.findByIdAndUpdate(author._id, { $push: { "booksid": book._id } });
    res.send("Data save!!!")
}
const userDisplay = async (req, res) => {
    const author = await AuthorModel.find().populate("booksid");
    res.send(author);
}

const bookSave = async (req, res) => {
    const { aid, booktitle, price } = req.body;
    const book = await BookModel.create({
        booktitle: booktitle,
        price: price
    })

    await AuthorModel.findByIdAndUpdate(aid, {$push:{"booksid":book._id}});
    res.send("OKKK");
}





module.exports = {
    userSave,
    userDisplay,
    bookSave
}