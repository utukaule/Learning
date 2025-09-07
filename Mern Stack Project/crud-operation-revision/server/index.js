import express from "express";
import connectionDatabase from "./database.js";

const app = express();
connectionDatabase()
app.get("/", (req, res) => {
  res.send("this is home page");
});

app.listen(5000, () => {
  console.log("connected to port 5000");
});
