import Application from "../models/Application.js";

export const placementAnalytics = async (req, res) => {
  const totalApplications =
    await Application.countDocuments();

  const selectedCount =
    await Application.countDocuments({
      status: "selected"
    });

  const rejectedCount =
    await Application.countDocuments({
      status: "rejected"
    });

  const shortlistedCount =
    await Application.countDocuments({
      status: "shortlisted"
    });

  res.json({
    success: true,
    data: {
      totalApplications,
      shortlistedCount,
      selectedCount,
      rejectedCount
    }
  });
};