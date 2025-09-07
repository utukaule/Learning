import Book from "../model/book.model.js";

//
const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;
    // checking validation
    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.Author ||
      !body.SellingPrice ||
      !body.PublishDate
    ) {
      res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const bookAdd = await Book.insertOne(body);
    if (bookAdd) {
      return res.status(201).json({
        message: "Data created successfully",
        success: true,
        ID: bookAdd?._id,
      });
    }
    console.log("bookAdd:-", bookAdd);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// get all book list
const handleBookListController = async (req, res) => {
  try {
    const bookList = await Book.find({});
    return res.status(200).json({
      message: "All books are fetched successfully",
      success: true,
      TotalCount: bookList.length,
      BookList: bookList,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

// delete selected book
const handleDeleteController = async (req, res) => {
  const body = req.body;
  try {
    const deleted = await Book.deleteOne({ _id: body.Id });
    if (deleted.acknowledged) {
      return res.json({
        message: "Book deleted successfully",
        success: true,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

// update book information
const handleBookUpdateController = async (req, res) => {
  const body  = req.body;
  try {
    const updating = await Book.updateOne({ _id: body?.Id }, { $set: body });
    if (updating?.acknowledged) {
      return res.json({
        message: "Book updated successfully",
        success: true,
      });
    }
    console.log(updating);
  } catch (error) {
    return res.json({
      message: error.message,
      success: false,
    });
  }
};

export {
  handleBookStoreController,
  handleBookListController,
  handleDeleteController,
  handleBookUpdateController
};
