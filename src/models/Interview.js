import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    interviewId: {
      type: String,
      unique: true
    },
    applicationId: String,
    round: String,
    interviewer: String,
    interviewDate: Date,
    result: String
  },
  { timestamps: true }
);

export default mongoose.model(
  "Interview",
  interviewSchema
);