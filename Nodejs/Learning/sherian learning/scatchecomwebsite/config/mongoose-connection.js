import mongoose from "mongoose";

export const mongoodbConnection = () => {
  mongoose
    .connect("mongodb+srv://crud:crud%40123@cluster0.kr2yzpi.mongodb.net/")
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log("problem while connecting");
    });
};
