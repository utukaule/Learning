import express, { urlencoded } from "express";
import path from "path";
const app = express();

app.use(urlencoded({ extended: true }));

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/ejs", (req, res) => {
  res.render("index.ejs");
});
app.get("/", (req, res) => {
  res.send("home page ");
});

app.post("/form-submit", (req, res) => {
  // const data = req.body
  // res.send(data.name)
  res.json({
    message: "form is submitted",
    success: true,
    name:req.body.name,
    email:req.body.email
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("connected");
});
