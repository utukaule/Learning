import express from "express";
import mongoose from "mongoose";
import path from "path";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const app = express();

cloudinary.config({
  cloud_name: "dnonoamu3",
  api_key: "359915882779661",
  api_secret: "A1HZnIYFLMz__Cu8ilYoSMVu2T8",
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve("public"))));

mongoose
  .connect(
    "mongodb+srv://project_one:Swami%40%4012345@cluster0.c3crenk.mongodb.net/",
    { dbName: "image_Storage" }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("db not connected ");
  });

app.get("/", (req, res) => {
  res.render("index.ejs", { url: null });
});



const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


// const imageSchema = new mongoose.Schema({
//     filename:String,

// })



app.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file.path;
    const cloudinaryRes = await cloudinary.uploader.upload(file,{
        folder:"NodeJS_Mastery_Course"
    })
    res.json({message:"File upload is done",cloudinaryRes})
})

const port = 3000;
app.listen(port, () => {
  console.log("listning to port 3000");
});
