import Drive from "../models/Drive.js";

export const getDrives = async (req, res) => {
  try {
    const drives = await Drive.find();

    res.status(200).json({
      success: true,
      count: drives.length,
      data: drives
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};