import express from "express";
import path from "path";
const app = express();

// json data
const product = [
  { title: "iphone", price: 60000 },
  { title: "One Plus", price: 40000 },
  { title: "Nokia", price: 1100 },
];

// send response
app.get("/", (req, res) => {
  // response in json
  // res.json({
  //     message:"fetched",
  //     products:product,
  //     success:true
  // })

  //response in html
  // res.send("<h1>This is your response</h1>")

  // send html file
  const dir = path.resolve();
  const url = path.join(dir, "./index.html");
  res.sendFile(url);
});

const port = 3000;
app.listen(port, () => {
  console.log("server is running on port 3000");
});
