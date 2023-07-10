import { Router } from "express";
import {
  getAllAssignments,
  getSubmittedAssignments,
  removeSubmission,
  submitAssignment,
} from "../controller/assignments.js";

const router = Router();

router.get("/list", getAllAssignments);
router.get("/submissions", getSubmittedAssignments);
router.post("/create", submitAssignment);
router.post("/remove", removeSubmission);

export default router;
