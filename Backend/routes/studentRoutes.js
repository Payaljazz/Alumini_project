import express from "express";
import {
  createStudentProfile,
  getAllStudents
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudentProfile);
router.get("/", getAllStudents);

export default router;
