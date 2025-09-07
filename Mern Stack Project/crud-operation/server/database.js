import mongoose from "mongoose";
// const databaseConnection = async () => {
//   await mongoose
//     .connect("mongodb+srv://crud:crud@123@cluster0.kr2yzpi.mongodb.net/")
//     .then(() => console.log("DataBase connection successfull"))
//     .catch((err) => {
//       console.log("error while connecting:- ", err);
//     });
// };

const databaseConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://crud:crud%40123@cluster0.kr2yzpi.mongodb.net/"
    );
    console.log("Database connection successful");
  } catch (err) {
    console.log("Error while connecting:", err);
  }
};

export default databaseConnection;

