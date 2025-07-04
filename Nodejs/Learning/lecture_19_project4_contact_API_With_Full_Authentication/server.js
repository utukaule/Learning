import express from "express";
import mongoose from "mongoose";
import path from "path";
import userRouter from "./routes/user.route.js";
import contactRouter from "./routes/contact.route.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve("public"))));
app.use(express.json());

// User Register route
app.use("/api/user/", userRouter);

// contact router
app.use("/api/contact", contactRouter);

// home route
app.get("/", (req, res) => {
  res.json({ message: "this is home route" });
});

mongoose
  .connect(
    "mongodb+srv://utkarsh:Swami%40%4012345@cluster0.kkycvuu.mongodb.net/",
    {
      dbName: "contact_list",
    }
  )
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(3000, () => {
      console.log("🚀 Server running on port 3000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

const port = 3000;
app.listen(port, () => {
  console.log("connected to port 3000");
});
