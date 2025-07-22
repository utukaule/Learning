import express from "express";
import mongoose from "mongoose";
import path from "path";
import userRouter from './Routes/user.routes.js'
import contactRouter from './Routes/contact.router.js'
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve())));

// home route
app.get("/", (req, res) => {
  res.json({
    message: "this is home route",
  });
});



// user routers

app.use("/api/user", userRouter);

// contact router
app.use("/api/contact", contactRouter);


// connecting to db
mongoose
  .connect(
    "mongodb+srv://utkarsh:Swami%40%40123@cluster0.wwrvykq.mongodb.net/",
    { dbname: "user_DataBase" }
  )
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((err) => {
    console.log("db not connected successfully ", err);
  });

// connection to port
app.listen(port, () => {
  console.log("server running at 3000");
});


// how to code backend
// model -> controller -> router -> server.js