import Achievement from "../models/Achievement.js";

export const addAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.create(req.body);
    res.status(201).json({ message: "Achievement added", achievement });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().populate("alumni");
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
