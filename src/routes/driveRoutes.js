import express from "express";
import { getDrives } from "../controllers/driveController.js";

const router = express.Router();

router.get("/drives", getDrives);

export default router;