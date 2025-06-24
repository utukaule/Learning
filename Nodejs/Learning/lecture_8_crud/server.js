import express from 'express';

const app = express();
const port = 3000;

// crud
app.get("/",(req,res)=>{
    res.send("This is home page")
})
app.get("/about",(req,res)=>{
    res.send("This is about page")
})

// post
// app.post('/path',(req,res)=>{
//     res.json
// })

app.listen(port, ()=>{
    console.log("connected")
})