const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://crud:crud%40123@cluster0.kr2yzpi.mongodb.net/`);
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
});

module.exports = mongoose.model("user",userSchema)
