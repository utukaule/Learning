import express, { Router } from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("login successfull");
});

router.post("/signup", (req, res) => {
  res.send("signuop successfull");
});

export default router;
