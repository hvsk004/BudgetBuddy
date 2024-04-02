// db.js
import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://hvsk:MaZS1QhVMolsAr3n@cluster0.hqql2rd.mongodb.net/"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
}

module.exports = connectDB;
