import jwt from "jsonwebtoken";
import { User } from "../Models/User.models.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.header("Auth");

  if (!token) {
    return res.json({
      message: "Token is not available",
      success: false,
    });
  }
  const decode = jwt.verify(token, "1234lksdfwe");
  const id = decode.userId;
  console.log("id",id)

  const user = await User.findById(id);

  console.log("user is :",user)
  if (!user) {
    return res.json({
      message: "User is not available",
      success: false,
    });
  }
  req.user = user
  next();

};
