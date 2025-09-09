import express from "express";
import mongoose from "mongoose";
import path from "path";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { name } from "ejs";

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

//   rendering login file
app.get("/", (req, res) => {
  res.render("login.ejs", { url: null });
});

// rendering register file
app.get("/register", (req, res) => {
  res.render("register.ejs", { url: null });
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
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  filename: String,
  public_id: String,
  imgUrl: String,
});

const User = mongoose.model("user", userSchema);

// file uploading using multer on cloudinary
app.post("/register", upload.single("file"), async (req, res) => {
  const file = req.file.path;
  const { name, email, password } = req.body;
  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "NodeJS_Mastery_Course",
  });
  
  
  // creating user
  const db = await User.create({
    name,
    email,
    password,
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  });
  res.redirect("/")
  /*res.render("register.ejs", { url: cloudinaryRes.secure_url });

   res.json({ message: "File upload is done", cloudinaryRes });*/
});


app.post("/login", async(req,res)=>{
    const {email,password} = req.body
    let user = await User.findOne({email})
    if(!user){
        res.render("login.ejs")
    }
    else if(user.password != password){
        res.render("login.ejs")
    }
    else{
        res.render("profile.ejs",{user})
    }
})

// connectring to the port
const port = 3000;
app.listen(port, () => {
  console.log("listning to port 3000");
});
