import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  card: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    defalut: [],
  },
  contect: Number,
  picture: String,
});

export const user = mongoose.model("user", userSchema);
