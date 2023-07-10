import { Sequelize } from "sequelize";
import { sequelize } from "../../database/db.js";

export const Teachers = sequelize.define("Teachers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
