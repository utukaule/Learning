import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
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

const Book = mongoose.model("Books", bookSchema);

export default Book;
