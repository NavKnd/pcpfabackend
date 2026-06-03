import express from "express";
import {
  getStudents,
  getStudentById
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/students", getStudents);
router.get("/students/:id", getStudentById);

export default router;