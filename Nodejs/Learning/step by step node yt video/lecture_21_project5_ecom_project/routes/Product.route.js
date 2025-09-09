import express from 'express'
import { addProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from '../controllers/Product.controller.js'

const router = express.Router()

// add product
// @api:- /api/product/add
router.post('/add',addProduct)


// get all products
//@api: /api/product/get
router.get('/get',getAllProducts)

// get product by id
//@api: /api/product/:id
router.get('/:id',getProductById)

// update product by id
//@api: /api/product/:id
router.put('/:id',updateProductById)


// delete product by id
//@api: /api/product/:id
router.delete('/:id',deleteProductById)



export default router