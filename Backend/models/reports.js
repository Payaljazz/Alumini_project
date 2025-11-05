import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  title: String,
  generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateFrom: Date,
  dateTo: Date,
  metrics: {
    totalAlumni: Number,
    totalEvents: Number,
    totalJobs: Number,
    engagementRate: Number
  },
  notes: String
}, { timestamps: true });

export default mongoose.model("Report", reportSchema);
