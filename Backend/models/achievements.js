import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  alumni: { type: mongoose.Schema.Types.ObjectId, ref: "Alumni", required: true },
  title: String,
  description: String,
  date: Date,
  type: { type: String, enum: ["award", "research", "contribution"], default: "award" }
}, { timestamps: true });

export default mongoose.model("Achievement", achievementSchema);
