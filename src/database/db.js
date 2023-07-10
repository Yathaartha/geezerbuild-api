import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: process.env.HOST,
  port: 3306,
  dialect: "mysql",
  username: "admin",
  password: "password",
  database: "school_db",
});
