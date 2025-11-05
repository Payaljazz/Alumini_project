import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  content: { type: String, required: true },
  type: {
    type: String,
    enum: ["announcement", "newsletter", "direct"],
    default: "direct"
  },
  read: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);
