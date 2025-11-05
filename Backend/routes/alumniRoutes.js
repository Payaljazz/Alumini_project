import express from "express";
import {
  createAlumniProfile,
  getAllAlumni,
  updateAlumniProfile
} from "../controllers/alumniController.js";

const router = express.Router();

router.post("/", createAlumniProfile);
router.get("/", getAllAlumni);
router.put("/:id", updateAlumniProfile);

export default router;
