import express from "express";
import {
  createStudentProfile,
  getAllStudents,
  getMyStudentProfile,
  updateMyStudentProfile,
} from "../controllers/studentController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createStudentProfile);
router.get("/", getAllStudents);


router.get("/me", protect, getMyStudentProfile);
router.put("/me", protect, updateMyStudentProfile);

export default router;
