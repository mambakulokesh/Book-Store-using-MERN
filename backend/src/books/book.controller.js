const Book = require("./book.model");

//! post a book
const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book Posted Successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book", error);
    res.status(500).send({ message: "Failed to create a book" });
  }
};


//! get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error Fething books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

//! get a single book
const getSingleBook = async (req, res) =>{
     try {
       const {id} = req.params;
       const book = await Book.findById(id);

       if(!book){
         res
           .status(404)
           .send({ message: "Book Not Found!" });
       }
       res.status(200).send(book);

     } catch (error) {
       console.error("Error Fething book", error);
       res.status(500).send({ message: "Failed to fetch book" });
     }
}

//! udate book data
const updateBook = async (req, res) =>{
    try {
      const {id} = req.params;
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
      if(!updatedBook){
         res.status(404).send({ message: "Book is Not Found!" });
      }
       res
         .status(200)
         .send({ message: "Book updated Successfully", book: updatedBook });

    } catch (error) {
      console.error("Error updating a books", error);
      res.status(500).send({ message: "Failed to update books" });
    }
}

//! Delete a book
const deleteABook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: "Book is Not Found!" });
    }
    res
      .status(200)
      .send({ message: "Book deleted Successfully", book: deletedBook });
  } catch (error) {
    console.error("Error updating a books", error);
    res.status(500).send({ message: "Failed to update books" });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteABook,
};
