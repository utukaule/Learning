import express from "express";
import connectionDatabase from "./database.js";
import bookRouter from './routes/books.route.js'
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
connectionDatabase();


app.use("/book",bookRouter)

// normal home route
app.get("/", (req, res) => {
  res.send("this is home page");
});

app.listen(8000, () => {
  console.log("connected to port 5000");
});
