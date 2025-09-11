import express from "express";
const router = express.Router();
import { ownerModel } from "../models/owner-model.js";

router.get("/", (req, res) => {
  res.send("hey this is home page!");
});

router.post("/create", (req, res) => {
  
});

export default router;
