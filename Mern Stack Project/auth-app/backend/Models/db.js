import mongoose from "mongoose";

const mongo_url = process.env.MONGO;
export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://crud:crud%40123@cluster0.kr2yzpi.mongodb.net/")
    .then(() => {
      console.log("mongodb is connected");
    })
    .catch((err) => {
      console.log(err, "connection failed");
    });
};
