import {Cart} from '../models/Cart.model.js'

// add to cart
export const addToCart = async(req,res) =>{
    const {productId,title,price,qty} = req.body

    const user = req.user;
    let cart = await 
}