import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db.js";
import { Assignment } from "../assignment/Assignment.js";

export const Assignments = sequelize.define(
  "Assignments",
  {
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
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Assignments.belongsTo(Assignment, {
  foreignKey: "assignmentId",
  as: "assignment",
  targetKey: "id",
});
