import mongoose from "mongoose";
import User from "./models/User.js";  // adjust path if needed

mongoose.connect("mongodb://127.0.0.1:27017/alumniDB");

const verifyUsers = async () => {
  try {
    // Count total users
    const count = await User.countDocuments();
    console.log("✅ Total users in DB:", count);

    // See 5 sample users
    const sample = await User.find().limit(5);
    console.log("Sample users:", sample);

    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

verifyUsers();
