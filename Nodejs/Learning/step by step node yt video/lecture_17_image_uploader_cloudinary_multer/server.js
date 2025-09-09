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

// used to hide "POST response" in "URL"
app.use(express.urlencoded({ extended: true }));

// joining the static path like "css"
app.use(express.static(path.join(path.resolve("public"))));

// connection with db
mongoose
  .connect(
    "mongodb+srv://utkarsh:Swami%40%4012345@cluster0.mg6xfwm.mongodb.net/",
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

// file uploading in webserver
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// model
const imageSchema = new mongoose.Schema({
  filename: String,
  public_id: String,
  imgUrl: String,
});

const File = mongoose.model("cloudinary", imageSchema);

// file uploading using multer on cloudinary
app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file.path;
  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "NodeJS_Mastery_Course",
  });
  // save to database

  const db = await File.create({
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  });
  res.render("index.ejs", { url: cloudinaryRes.secure_url });

/* res.json({ message: "File upload is done", cloudinaryRes });*/
});

// connectring to the port
const port = 3000;
app.listen(port, () => {
  console.log("listning to port 3000");
});
