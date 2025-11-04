import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import PDFDocument from "pdfkit";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//  MongoDB connection
const start = async () => {
  try {
    console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);
await mongoose.connect(process.env.MONGO_URI);


    console.log(" Connected to MongoDB");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

start();
