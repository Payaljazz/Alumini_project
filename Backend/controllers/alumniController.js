import AlumniProfile from "../models/AlumniProfile.js";

export const getAllAlumni = async (req, res) => {
  try {
    const filters = {};

    if (req.query.branch) filters.branch = req.query.branch;
    if (req.query.graduationYear)
      filters.graduationYear = Number(req.query.graduationYear);

    const alumni = await AlumniProfile.find(filters)
      .populate("user", "name email contact")
      .sort({ graduationYear: -1 });

    res.status(200).json({
      success: true,
      count: alumni.length,
      data: alumni
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch alumni",
      error: error.message
    });
  }
};
