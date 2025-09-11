import express from "express";
import cookieParser from "cookie-parser";
// import path from "path";
// import { fileURLToPath } from "url";
import { mongoodbConnection } from "./config/mongoose-connection.js";
const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
import ownersRouter from './routes/ownersRouter.js'
import usersRouter from './routes/usersRouter.js'
import productsRouter from './routes/productsRouter.js'
mongoodbConnection(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/owners",ownersRouter)
app.use("/users",usersRouter)
app.use("/products",productsRouter)

app.listen(3000);
 