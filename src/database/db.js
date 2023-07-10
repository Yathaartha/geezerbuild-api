import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: process.env.HOST,
  port: 3306,
  dialect: "mysql",
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
