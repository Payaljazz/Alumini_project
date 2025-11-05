import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ message: "Job posted", job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy");
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
