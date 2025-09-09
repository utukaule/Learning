import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// user REGISTER
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (name == "" || email == "" || password == "") {
    return res.json({ message: "All fields are compulsory." });
  }

  let user = await User.findOne({ email });

  if (user) {
    return res.json({ message: "user already exists...", success: false });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashPassword });

  res.json({
    messgage: "getting data from req.body",
    success: true,
    data: req.body,
  });
};

// user LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email == "" || password == "") {
    return res.json({
      message: "All fields and compulsory",
      success: false,
    });
  }
  let user = await User.findOne({ email });
  if (!user) {
    return res.json({
      message: "Email id not valid",
      success: false,
    });
  }
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return res.json({ message: "Invalid Password", success: false });
  }
  const token = jwt.sign({ userId: user._id }, "1234566");

  res.json({ message: `Welcome ${user.name}`,token, success: true });
};
