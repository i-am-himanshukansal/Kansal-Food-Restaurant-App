import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    const connection = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    });

    console.log(
      `MongoDB connected successfully. Host: ${connection.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

export default dbConnection;
