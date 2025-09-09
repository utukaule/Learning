const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const UserModel = require("./models/user.model.js");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const path = require("path");
const userModel = require("./models/user.model.js");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// home page
app.get("/", (req, res) => {
  res.render("index");
});

// register new user
app.post("/create", (req, res) => {
  const { username, email, password, age } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createUser = await UserModel.create({
        username,
        email,
        password: hash,
        age,
      });
      let token = jwt.sign({ email }, "secret");
      res.cookie("token", token);
      res.send(createUser);
    });
  });
});

// login
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.send("something went wrong!");
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: user.email }, "secret");
      res.cookie("token", token);
      res.send("Welcome suryawanshi");
    } else res.send("something went wrong!");
  });
});

// logout
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});
app.listen(3000);
