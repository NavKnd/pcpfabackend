import express from "express";
import { getApplications } from "../controllers/applicationController.js";

const router = express.Router();

router.get("/applications", getApplications);

export default router;