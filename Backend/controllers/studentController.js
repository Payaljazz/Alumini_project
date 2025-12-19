import Student from "../models/Student.js";


export const createStudentProfile = async (req, res) => {
  try {
    const existingStudent = await Student.findOne({
      user: req.user.id,
    });

    if (existingStudent) {
      return res
        .status(400)
        .json({ message: "Student profile already exists" });
    }

    const student = await Student.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json({
      message: "Student profile created",
      student,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getMyStudentProfile = async (req, res) => {
  try {
    let student = await Student.findOne({ user: req.user.id })
      .populate("mentor")
      .populate("user", "name email");

    // 🔥 AUTO-CREATE PROFILE IF NOT EXISTS
    if (!student) {
      student = await Student.create({
        user: req.user.id,
        course: "",
        year: "",
        interests: [],
      });
    }

    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateMyStudentProfile = async (req, res) => {
  try {
    const student = await Student.findOne({ user: req.user.id });

    if (!student) {
      return res
        .status(404)
        .json({ message: "Student profile not found" });
    }

    student.course = req.body.course || student.course;
    student.year = req.body.year || student.year;
    student.interests = req.body.interests || student.interests;

    await student.save();

    res.status(200).json({
      message: "Student profile updated successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("user mentor");
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
