import mongoose from "mongoose";

export const databaseConnection = async () => {
  const MONGODB_URI = process.env.MONGO_URI;
  if (!MONGODB_URI) {
    throw new Error("MONGO_URI not found");
  }
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("database connected successfully...");
  } catch (error) {
    console.error("Failed connecting to database", error);
  }
};
