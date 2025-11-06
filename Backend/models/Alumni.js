import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  batch: String,
  course: String,
  profession: String,
  company: String,
  achievements: [String],
  location: String,
  linkedin: String,
  contributions: {
    donations: { type: Number, default: 0 },
    volunteering: { type: Boolean, default: false }
  }
}, { timestamps: true });

export default mongoose.model("Alumni", alumniSchema);
