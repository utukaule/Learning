import Book from "../models/books.model.js";

// add new book
const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;
    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.Author ||
      !body.SellingPrice ||
      !body.PublishDate
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const bookAdd = await Book.insertOne(body);
    console.log("boook is added ", bookAdd);
    if (bookAdd) {
      return res.status(201).json({
        message: "Book added successfully",
        success: true,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export { handleBookStoreController };
