import { fetchDataset } from "../services/syncService.js";

import Student from "../models/Student.js";
import Company from "../models/Company.js";
import Drive from "../models/Drive.js";
import Application from "../models/Application.js";
import Interview from "../models/Interview.js";

export const syncData = async (req, res) => {
  try {
    const dataset = await fetchDataset();

    const {
      students = [],
      companies = [],
      drives = [],
      applications = [],
      interviews = [],
    } = dataset.data;

    console.log("Students:", students.length);
    console.log("Companies:", companies.length);
    console.log("Drives:", drives.length);
    console.log("Applications:", applications.length);
    console.log("Interviews:", interviews.length);

    // Clear existing data
    await Student.deleteMany({});
    await Company.deleteMany({});
    await Drive.deleteMany({});
    await Application.deleteMany({});
    await Interview.deleteMany({});

    // Insert Students
    try {
      await Student.insertMany(students, { ordered: false });
      console.log("Students inserted");
    } catch (err) {
      console.log("Student insert error:", err.message);
    }

    // Insert Companies
    try {
      await Company.insertMany(companies, { ordered: false });
      console.log("Companies inserted");
    } catch (err) {
      console.log("Company insert error:", err.message);
    }

    // Insert Drives
    try {
      await Drive.insertMany(drives, { ordered: false });
      console.log("Drives inserted");
    } catch (err) {
      console.log("Drive insert error:", err.message);
    }

    // Insert Applications
    try {
      await Application.insertMany(applications, { ordered: false });
      console.log("Applications inserted");
    } catch (err) {
      console.log("Application insert error:", err.message);
    }

    // Insert Interviews
    try {
      await Interview.insertMany(interviews, { ordered: false });
      console.log("Interviews inserted");
    } catch (err) {
      console.log("Interview insert error:", err.message);
    }

    res.status(200).json({
      success: true,
      message: "Database synced successfully",
      data: {
        students: await Student.countDocuments(),
        companies: await Company.countDocuments(),
        drives: await Drive.countDocuments(),
        applications: await Application.countDocuments(),
        interviews: await Interview.countDocuments(),
      },
    });

  } catch (error) {
    console.error("SYNC ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};