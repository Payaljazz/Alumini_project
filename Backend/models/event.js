import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  location: String,
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  rsvpCount: { type: Number, default: 0 },
  isPublic: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
