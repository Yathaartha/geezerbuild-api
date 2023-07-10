import { Op } from "sequelize";
import { Assignment } from "../../models/assignment/index.js";
import { Assignments } from "../../models/assignments/index.js";

export const getAssignments = async () => {
  const assignments = await Assignment.findAll({
    where: {
      dueDate: {
        [Op.gte]: new Date(),
      },
    },
  });

  return assignments;
};

export const getAssignmentsByStudentId = async (studentId) => {
  const assignments = await Assignments.findAll({
    where: {
      userId: studentId,
    },
  });

  const response = [];

  // get data for each assignment from the assignment table
  // and add it to the response object
  for (let i = 0; i < assignments.length; i++) {
    const assignment = await Assignment.findOne({
      where: {
        id: assignments[i].assignmentId,
      },
    });

    response.push({
      id: assignments[i].id,
      title: assignment.title,
      dueDate: assignment.dueDate,
      userId: assignments[i].userId,
      file: assignments[i].file,
    });
  }

  return response;
};

export const insertAssignment = async (studentId, assignmentId, submission) => {
  await Assignments.create({
    userId: studentId,
    assignmentId,
    file: submission,
  });

  return "Assignment submitted successfully";
};

export const removeAssignment = async (assignmentId) => {
  await Assignments.destroy({
    where: {
      id: assignmentId,
    },
  });

  return "Assignment removed successfully";
};
