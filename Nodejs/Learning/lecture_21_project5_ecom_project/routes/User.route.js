import express from "express";
import { registerUser, userLogin } from "../controllers/User.controller.js";
const router = express.Router();

// new user router
// @api:api/user/register
router.post("/register", registerUser);

// user login
// @api:api/user/login
router.post("/login", userLogin);

export default router;
