import { Sequelize } from "sequelize";
import { sequelize } from "../../database/db.js";

export const Assignments = sequelize.define("Assignments", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  assignmentId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Assignment",
      key: "id",
    },
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Students",
      key: "id",
    },
  },
  file: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
