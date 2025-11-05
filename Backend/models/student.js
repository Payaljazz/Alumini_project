import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  course: String,
  year: String,
  interests: [String],
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "Alumni" }
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
