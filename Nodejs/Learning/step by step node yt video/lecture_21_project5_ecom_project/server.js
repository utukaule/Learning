import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User.route.js";
import productRouter from './routes/Product.route.js'
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve())));

//user registration
app.use("/api/user", userRouter);

// product router
app.use('/api/product',productRouter)

app.get("/", (req, res) => {
  res.send("this is home page");
});

mongoose
  .connect(process.env.MONGO_URL, { dbName: "ecom" })
  .then(() => {
    console.log("Connected to db successfully");
  })
  .catch((err) => {
    console.log("Error while connecting db", err);
  });

app.listen(process.env.PORT, () => {
  console.log("server is running on port 3000");
});
