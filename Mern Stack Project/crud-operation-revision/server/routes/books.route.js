import express from "express";
import { handleBookStoreController } from "../controller/books.controller.js";

const router = express.Router();

// http://localhost:8000/book/addbook
router.post("/addBook", handleBookStoreController);

export default router;
