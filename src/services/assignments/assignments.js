import { Assignment } from "../../model/assignment";
import { Assignments } from "../../model/assignments";

export const getAssignments = async () => {
  const assignments = await Assignment.findAll();

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
