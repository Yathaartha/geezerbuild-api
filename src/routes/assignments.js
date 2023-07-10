import { Router } from "express";
import {
  getAssignments,
  getSubmittedAssignments,
  removeSubmission,
  submitAssignment,
} from "../controller/assignments.js";

const router = Router();

router.get("/list", getAssignments);
router.get("/submissions", getSubmittedAssignments);
router.post("/create", submitAssignment);
router.post("/remove", removeSubmission);

export default router;
