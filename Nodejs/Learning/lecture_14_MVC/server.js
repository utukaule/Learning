import express from "express";
import mongoose from "mongoose";
import path from "path";
import { User } from "./models/User.model.js";
const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
    "mongodb+srv://project_one:Swami%40%4012345@cluster0.c3crenk.mongodb.net/",
    {
      dbName: "lecture_14",
    }
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("this is home page");
});

// /ejs route to access the form
app.get("/ejs", (req, res) => {
  res.render("index.ejs");
});

// route to submit the form
app.post("/form-submit", async (req, res) => {
  // console.log("getting the from body", req.body);

  try {
    let user = await User.create(req.body);
    res.json({
      message: "form has been submitted",
      success: true,
      new_user: user,
    });
  } catch (err) {
    res.json({ message: error.message });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log("db connected");
});
