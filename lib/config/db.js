import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "------mongodbConnnectionstring-------"
  );
  console.log("db connected");
};
