import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully".bgGreen);
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

export default connectDB;
