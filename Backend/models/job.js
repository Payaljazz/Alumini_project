import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: String,
  description: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  location: String,
  type: {
    type: String,
    enum: ["Full-time", "Part-time", "Internship"],
    default: "Full-time"
  },
  deadline: Date,
  applyUrl: String
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);
