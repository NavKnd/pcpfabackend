import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    applicationId: {
      type: String,
      unique: true
    },
    studentId: String,
    driveId: String,
    appliedAt: Date,
    currentRound: String,
    status: String
  },
  { timestamps: true }
);

export default mongoose.model(
  "Application",
  applicationSchema
);