import Student from "../models/Student.js";

export const getStudents = async (req, res) => {
  try {
    const filter = {};

    if (req.query.department)
      filter.department = req.query.department;

    if (req.query.status)
      filter.status = req.query.status;

    if (req.query.cgpaMin)
      filter.cgpa = {
        $gte: Number(req.query.cgpaMin)
      };

    const students = await Student.find(filter);

    res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findOne({
      studentId: req.params.id
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};