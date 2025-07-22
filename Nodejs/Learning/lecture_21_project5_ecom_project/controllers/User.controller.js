import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register User
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (name == null || email == null || password == null) {
    return res.json({
      message: "All fields are compulsory.",
      success: false,
    });
  }

  let user = await User.findOne({ email });
  if (user) {
    return res.json({
      message: "Email is already registerd. Try another email.",
      success: false,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });
  res.json({
    message: "User created successfully...",
    success: true,
    data: user,
  });
};

// Login User

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (email == null || password == null) {
    return res.json({
      message: "All fields are compulsory",
      success: false,
    });
  }

  let user = await User.findOne({ email });
  console.log("user email:-", user.password);
  if (!user) {
    res.json({
      message: "email is not valid",
      success: false,
    });
  }

  // compare password
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return res.json({
      message: "Password is Invalid",
      success: false,
    });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT, {
    expiresIn: "1d",
  });

  res.json({
    message: `${user.name} is logged in.`,
    token,
    success: true,
  });
};
