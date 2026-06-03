import Student from "../models/Student.js";

export const getHealth = async (req, res) => {
  const count = await Student.countDocuments();

  res.status(200).json({
    success: true,
    database: "connected",
    students: count
  });
};