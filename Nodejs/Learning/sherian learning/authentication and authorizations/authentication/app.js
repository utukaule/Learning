// ❌cookie set and get method

// import express from "express";
// import cookieParser from "cookie-parser";
// const app = express();
// app.use(cookieParser());
// app.get("/", (req, res) => {
//   res.cookie("name", "utkarsh");
//   res.send("this is home page");
// });

// app.get("/another", (req, res) => {
//     console.log(req.cookies)
//     res.send("this is another page");
// });

// app.listen(3000, () => {

//   console.log("this is home page");
// });

// ❌bcrypt (encryption and decryption)

// salt:- random string
// password:- hash
// mix salt and hashed password together so the random is generated

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
const app = express();

// app.get("/", (req, res) => {
//   res.send("this is hom page");
//   // password encryption
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash("mypassword", salt, (err, hash) => {
//       console.log(hash);
//     });
//   });
// });

// app.listen(3000, () => {
//   console.log("this is home page");
// });

// ❌ now we are comparing the password

// app.get("/", (req, res) => {
//    res.send('home')
//     bcrypt.compare("mypassword","$2b$10$/9DHlQ8DY4aCeUrpGOmBheL0VTSjvdoX.q1uXq65zT5GbapPyU/aO",(err,result)=>{
//         console.log(result)
//     })
// });

// app.listen(3000, () => {
//   console.log("this is home page");
// });

// ❌jwt me data kese dale aur bahar nikale
app.use(cookieParser())
app.get("/", (req, res) => {
    const token = jwt.sign({ email: "test@email.com" }, "secret");
    res.cookie("token", token);
    console.log(token);
    res.send("home");
});

app.get("/read",(req,res)=>{
    const data = jwt.verify(req.cookies.token,"secret")
    console.log(data)
    res.send(data.email)
})

app.listen(3000, () => {
  console.log("this is home page");
});
