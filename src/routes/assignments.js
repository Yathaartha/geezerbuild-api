import { Router } from "express";
import {
  getAssignments,
  removeSubmission,
  submitAssignment,
} from "../controller/assignments";

const router = Router();

router.get("/list", getAssignments);
router.post("/create", submitAssignment);
router.post("/remove", removeSubmission);
