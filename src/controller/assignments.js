import {
  insertAssignment,
  removeAssignment,
} from "../services/assignments/index.js";

export const getAssignments = async (req, res) => {
  try {
    const response = await getAssignments();

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSubmittedAssignments = async (req, res) => {
  const { studentId } = req.body;

  try {
    const response = await getSubmittedAssignments(studentId);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
