import mongoose from "mongoose";

const alumniProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    graduationYear: {
      type: Number,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    currentCompany: {
      type: String
    },
    designation: {
      type: String
    },
    skills: [String],
    bio: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("AlumniProfile", alumniProfileSchema);