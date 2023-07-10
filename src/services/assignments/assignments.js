import { Assignment } from "../../models/assignment/index.js";
import { Assignments } from "../../models/assignments/index.js";

export const getAssignments = async () => {
  const assignments = await Assignment.findAll();

  return assignments;
};

export const getSubmittedAssignments = async (studentId) => {
  const assignments = await Assignments.findAll({
    where: {
      studentId: studentId,
    },
  });

  return assignments;
};

export const insertAssignment = async (studentId, assignmentId, submission) => {
  await Assignments.create({
    studentId,
    assignmentId,
    file: submission,
  });
};

export const removeAssignment = async (studentId, assignmentId) => {
  await Assignments.destroy({
    where: {
      id: id,
    },
  });
};
