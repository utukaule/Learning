import express from "express";
import mongoose from "mongoose";
import { shortUrl,getOriginalUrl } from "./Controllers/url.contorller.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://project_one:Swami%40%4012345@cluster0.c3crenk.mongodb.net/",
    { dbName: "short_url" }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

// rendering ejs file
app.get("/", (req, res) => {
  res.render("index.ejs",{shortUrl:null});
});


// shorting url logic
app.post("/short",shortUrl)

// redirect to original url using short code:-  Dynamic route
app.get('/:shortCode',getOriginalUrl)


const port = 3000;
app.listen(port, () => {
  console.log("server is running on port 3000");
});
