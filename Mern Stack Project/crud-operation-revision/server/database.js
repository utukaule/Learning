import mongoose from "mongoose";

const connectionDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://crud:crud%40123@cluster0.kr2yzpi.mongodb.net/"
    );
    console.log("connected to db successfully");
  } catch (error) {
    console.log("connection unsuccessfull");
  }
};

export default connectionDatabase;
