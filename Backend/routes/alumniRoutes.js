import express from "express";
import AlumniProfile from "../models/AlumniProfile.js";

const router = express.Router();

/* ==========================
   TEST ROUTE
========================== */
router.get("/test", (req, res) => {
  res.send("✅ alumniRoutes working");
});

/* ==========================
   ALUMNI DIRECTORY
   GET /api/alumni/directory
========================== */
router.get("/directory", async (req, res) => {
  try {
    const alumni = await AlumniProfile.find()
      .populate("user", "name email contact");

    res.status(200).json(alumni);
  } catch (err) {
    console.error("Directory error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ==========================
   ALUMNI PROFILE
========================== */
router.get("/profile/:id", async (req, res) => {
  try {
    const profile = await AlumniProfile.findById(req.params.id)
      .populate("user", "name email contact");

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
