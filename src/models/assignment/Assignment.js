import { Sequelize } from "sequelize";
import { sequelize } from "../../database/db.js";

export const Assignment = sequelize.define(
  "Assignment",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    detail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dueDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
