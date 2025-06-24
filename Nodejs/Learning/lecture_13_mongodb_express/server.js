import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect(
  "mongodb+srv://project_one:Swami%40%4012345@cluster0.c3crenk.mongodb.net/",
  {
    dbName: "Nodejs course",
  }
).then(()=>console.log("mongodb is connected")).catch((err)=>console.log("The error is",err))

app.get("/", (req, res) => {
  res.send("this is home page");
});

const port = 3000;
app.listen(port, () => {
  console.log("connected");
});
