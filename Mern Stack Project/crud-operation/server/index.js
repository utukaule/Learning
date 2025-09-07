import express from "express";
import databaseConnection from "./database.js";
import bookRouter from './routes/book.routes.js'
import cors from 'cors'
const app = express();
app.use(express.json())
app.use(cors())
// database connection
databaseConnection();

app.get("/", (req, res) => {
  res.send("this is home page");
});


app.use('/book',bookRouter)

app.listen(8000, () => {
  console.log("port is listening on 8000");
});
