import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://keshav2003:keshav2003@cluster0.qzig1.mongodb.net/todo-app"
  );
  console.log("db connected");
};
