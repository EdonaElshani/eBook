const Book = require("../models/ebook.model");
// const jwt = require("jsonwebtoken");
// const SECRET = 'supersecret';

/* Create BOOK */
const createBook = (req, res)=>{
    // const user = jwt.verify(req.cookies.userToken, SECRET);
    // {...req.body, createdBy: user._id}
    Book.create(req.body)
    .then((newBook) =>{
        console.log(newBook);
        res.json(newBook);
    })
    .catch((err) => {
        res.status(400).json({err});
});
}
/* Display ALL Books */
const getAllBooks = (req, res) => {
    //Book.find({}).populate('createdBy', 'username email')
    Book.find()
    .then((allBooks) =>{
        res.json(allBooks);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
}

/* Details for ONE Book */
const getOneBook = (req, res) =>{
    Book.findOne({ _id: req.params.id })
    .then((oneBook) => {
        console.log(oneBook);
      res.json(oneBook);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
}
/*Update/EDIT Book */
const updateBook = (req, res) => {
    Book.findOneAndUpdate({ id: req.params.id },req.body, {
            new: true,
            runValidators: true
    })
    .then((updatedBook) => {
        res.json(updatedBook);
    })
    .catch((err) => {
        res.status(400).json({ err });
      });
}


//Delete Book
const deleteBook = (req, res) => {
    Book.deleteOne({ _id: req.params.id })
    .then((deletedBook) => {
        res.json({ deletedBook });
    })
    .catch((err) => {
        res.status(400).json({ err });
      });
}


module.exports = { createBook, getAllBooks , getOneBook, updateBook, deleteBook};