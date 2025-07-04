import bcrypt from "bcryptjs";
import { User } from "../Models/User.models.js";
import jwt from "jsonwebtoken";
// New User registration
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // checking all field or not
  if (name == "" || email == "" || password == "") {
    return res.json({
      message: "all fields are required",
      success: false,
    });
  }

  // checking the email is already exists or not
  let user = await User.findOne({ email });
  if (user) {
    return res.json({
      message: "Email is already exists. Try with another email",
      success: false,
    });
  }

  // hashing password before saving it
  const hashPassword = await bcrypt.hash(password, 10);
  // adding new user to db
  user = await User.create({ name, email, password: hashPassword });

  res.json({
    message: "User created successfully...✅",
    success: true,
    data: user,
  });
};

// Login registration
export const login = async (req, res) => {
  const { email, password } = req.body;

  // check field is empty or not
  if (email == "" || password == "") {
    return res.json({
      message: "All fields are required",
      success: false,
    });
  }

  // checking the email in db
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      message: "User not exists",
      success: false,
    });
  }

  // suppose if user exists then check for password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({
      message: "Invalid Password",
      success: false,
    });
  }

  // token creation
  const token = jwt.sign({ userId: user._id }, "1234lksdfwe", { expiresIn: "1d" });

  res.json({
    message: `Welcome ${user.name}`,
    token,
    success: true,
  });
};
