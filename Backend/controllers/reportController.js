import Report from "../models/Report.js";

export const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json({ message: "Report generated", report });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("generatedBy", "name email");
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
