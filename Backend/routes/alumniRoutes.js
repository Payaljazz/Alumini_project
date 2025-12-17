import express from "express";
import { getAllAlumni } from "../controllers/alumniController.js";

const router = express.Router();

router.get("/", getAllAlumni);

export default router;
