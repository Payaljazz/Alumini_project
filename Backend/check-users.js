import mongoose from "mongoose";
import User from "./models/User.js";

mongoose.connect("mongodb://127.0.0.1:27017/alumniDB");

const verifyUsers = async () => {
  try {
    const count = await User.countDocuments();
    console.log("✅ Total users in DB:", count);

    const sample = await User.find().limit(5);
    console.log("Sample users:", sample);

    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

verifyUsers();
