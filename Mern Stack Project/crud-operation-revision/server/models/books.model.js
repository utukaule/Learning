import mongoose from "mongoose";

// creating model

const bookShema = new mongoose.Schema(
  {
    BookName: {
      type: String,
      required: true,
    },
    BookTitle: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    SellingPrice: {
      type: String,
      required: true,
    },
    PublishDate: {
      type: String,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Books", bookShema);
export default Book;
