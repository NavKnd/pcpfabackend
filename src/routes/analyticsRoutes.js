import express from "express";
import {
  placementAnalytics
} from "../controllers/analyticsController.js";

const router = express.Router();

router.get(
  "/analytics/placements",
  placementAnalytics
);

export default router;