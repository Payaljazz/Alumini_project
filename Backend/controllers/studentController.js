import Student from "../models/Student.js";

export const createStudentProfile = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: "Student profile created", student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("user mentor");
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
