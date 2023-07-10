import { Assignment } from "../../model/assignment";
import { Assignments } from "../../model/assignments";

export const getAssignments = async () => {
  const assignments = await Assignment.findAll();

  return assignments;
};

export const insertAssignment = async (assignment) => {
  await Assignments.create(assignment);
};

export const removeAssignment = async (id) => {
  await Assignments.destroy({
    where: {
      id: id,
    },
  });
};
