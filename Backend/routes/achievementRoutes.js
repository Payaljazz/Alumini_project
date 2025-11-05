import express from "express";
import {
  addAchievement,
  getAchievements
} from "../controllers/achievementController.js";

const router = express.Router();

router.post("/", addAchievement);
router.get("/", getAchievements);

export default router;
