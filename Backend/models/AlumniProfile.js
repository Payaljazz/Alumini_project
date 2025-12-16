import mongoose from "mongoose";

const alumniProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  graduationYear: Number,
  branch: String,
  currentCompany: String,
  designation: String,
  skills: [String],
  bio: String,
}, { timestamps: true });

export default mongoose.model("AlumniProfile", alumniProfileSchema);
