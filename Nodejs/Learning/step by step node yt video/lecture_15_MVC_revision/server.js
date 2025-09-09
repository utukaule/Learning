import express from "express";
import path from "path";
import mongoose from "mongoose";
import {User} from './models/User.model.js'

const app = express();

// used to access the static files like CSS
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://project_one:Swami%40%4012345@cluster0.c3crenk.mongodb.net/",
    { dbName: "db2" }
  )
  .then(() => {
    console.log("db connected ");
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.post('/form-submit',async(req,res)=>{
    let user = await User.create(req.body)
    res.json({
        message:"form submitted",
        success:true,
        new_user:user
    })
})

const port =3000
app.listen(port,()=> {console.log("server is connected")})