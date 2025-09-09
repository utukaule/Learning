import mongoose from 'mongoose'


// item schema
const cartItemSchema = new mongoose.Schema({
    productId:{
        typeof:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        requre:true
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    qty:{
        type:Number,
        require:true
    },
})



// cart schema

const cartSchema = new mongoose.Schema({
     userId:{
        typeof:mongoose.Schema.Types.ObjectId,
        ref:"User",
        requre:true
    },
    item:[cartItemSchema]
})



export const Cart =  mongoose.model("Cart",cartSchema)