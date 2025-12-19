import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load env variables
dotenv.config();

const app = express();

/* =======================
   MIDDLEWARES
======================= */
app.use(cors());
app.use(express.json());

/* =======================
   ROUTES IMPORT
======================= */
import authRoutes from "./routes/authRoutes.js";
import alumniRoutes from "./routes/alumniRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import achievementRoutes from "./routes/achievementRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

/* =======================
   ROUTES USE
======================= */
app.use("/api/auth", authRoutes);
app.use("/api/alumni", alumniRoutes);      // 🔥 MOST IMPORTANT
app.use("/api/student", studentRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/reports", reportRoutes);

/* =======================
   TEST ROUTE
======================= */
app.get("/", (req, res) => {
  res.send("✅ Alumni Backend API is running");
});

/* =======================
   DATABASE CONNECTION
======================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

/* =======================
   SERVER LISTEN
======================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
