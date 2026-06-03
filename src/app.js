import express from "express";
import syncRoutes from "./routes/syncRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import driveRoutes from "./routes/driveRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

const app = express();

app.use(express.json());
app.use("/", syncRoutes);
app.use("/", healthRoutes);
app.use("/", studentRoutes);
app.use("/", companyRoutes);
app.use("/", driveRoutes);
app.use("/", applicationRoutes);
app.use("/", interviewRoutes);
app.use("/", analyticsRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Placement Recruitment API Running"
  });
});

export default app;