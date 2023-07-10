"use strict";

const moment = require("moment/moment");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const assignments = [
      {
        id: 1,
        title: "Assignment 1",
        detail: "Assignment 1 detail",
        dueDate: moment().add(1, "days").format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        id: 2,
        title: "Assignment 2",
        detail: "Assignment 2 detail",
        dueDate: moment().add(2, "days").format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        id: 3,
        title: "Assignment 3",
        detail: "Assignment 3 detail",
        dueDate: moment().add(3, "days").format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        id: 4,
        title: "Assignment 4",
        detail: "Assignment 4 detail",
        dueDate: moment().add(4, "days").format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        id: 5,
        title: "Assignment 5",
        detail: "Assignment 5 detail",
        dueDate: moment().add(5, "days").format("YYYY-MM-DD HH:mm:ss"),
      },
    ];

    await queryInterface.bulkInsert("Assignment", assignments, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Assignment", null, {});
  },
};
