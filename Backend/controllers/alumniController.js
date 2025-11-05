import Alumni from "../models/Alumni.js";

export const createAlumniProfile = async (req, res) => {
  try {
    const alumni = await Alumni.create(req.body);
    res.status(201).json({ message: "Alumni profile created", alumni });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find().populate("user");
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateAlumniProfile = async (req, res) => {
  try {
    const alumni = await Alumni.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Alumni profile updated", alumni });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};