import express from "express";
import { getInterviews } from "../controllers/interviewController.js";

const router = express.Router();

router.get("/interviews", getInterviews);

export default router;