import express from 'express'
import {handleBookStoreController,handleBookListController,handleDeleteController,handleBookUpdateController} from '../controller/book.controller.js'

const router = express.Router()

// http://localhost:8000/book/addbook
router.post("/addBook",handleBookStoreController)
router.get("/bookList",handleBookListController) 
router.post("/deleteBook",handleDeleteController) 
router.put("/updateBook",handleBookUpdateController) 

export default router