import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./Models/db.js";
import cors from "cors";
import AuthRouter from "./Routes/Auth.router.js";

const app = express();
// to handle json data
app.use(express.json());

// to handle external port
app.use(cors());

// to handle secrete key
dotenv.config();

// db connection 
dbConnection();

app.get("/", (req, res) => {
  res.send("this is home page");
});

// auth router
app.use("/auth", AuthRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("connected to port 3000");
});
