import Interview from "../models/Interview.js";

export const getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find();

    res.status(200).json({
      success: true,
      count: interviews.length,
      data: interviews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};