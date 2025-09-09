import express from "express";

const app = express();

const port = 3000;

app.get('/',(req, res)=>{
    res.send("this is home page")
})

app.get('/utu',(req,res)=>{
  res.send("this is utu page")
})

app.listen(port, () => {
  console.log("server is running on port 3000");
});
