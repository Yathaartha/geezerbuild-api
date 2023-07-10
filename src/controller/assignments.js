import {
  insertAssignment,
  getAssignmentsByStudentId,
  removeAssignment,
  getAssignments,
} from "../services/assignments/index.js";

export const getAllAssignments = async (req, res) => {
  try {
    const response = await getAssignments();

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSubmittedAssignments = async (req, res) => {
  const { studentId } = req.query;
  if (studentId) {
    // Handle the case when the studentId parameter is provided
    // Example response: Return assignments for a specific student
    const response = await getAssignmentsByStudentId(studentId);

    res.json({ response });
  } else {
    // Handle the case when the studentId parameter is not provided
    // Example response: Return all assignments
    res.json({ message: "List of all assignments" });
  }
};

export const submitAssignment = async (req, res) => {
  const { studentId, assignmentId, submission } = req.body;

  try {
    const response = await insertAssignment(
      studentId,
      assignmentId,
      submission
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeSubmission = async (req, res) => {
  const { assignmentId } = req.body;

  try {
    const response = await removeAssignment(assignmentId);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
