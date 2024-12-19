const express = require('express')
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require('./book.controller');
const router = express.Router();


//! post a Book
router.post("/create-book", postABook)


//! get all books
router.get("/", getAllBooks);

//! single book endpoint
router.get("/:id", getSingleBook);

//! update book data
router.put("/edit/:id", updateBook)

//! Delete a book
router.delete("/:id", deleteABook)


module.exports = router;