import express from 'express'
const router = express.Router()


router.get("/",(req,res)=>{
    res.send("hey this is home page!")
})


export default router