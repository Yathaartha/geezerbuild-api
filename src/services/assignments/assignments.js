import { Assignment } from "../../model/assignment/index.js";
import { Assignments } from "../../model/assignments/index.js";

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
