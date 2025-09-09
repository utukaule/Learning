import express from "express";

const app = express();

let product = [
    {title:"iphone",price:60000},
    {title:"samsung",price:90000},
    {title:"google",price:50000},
]

app.get("/", (req, res) => {
  let name = "RAM";
  res.render("index.ejs", { name,product });
});

const port = 3000;
app.listen(port, () => {
  console.log("connected");
});
