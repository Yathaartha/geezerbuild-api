"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const students = [
      {
        username: "student1",
        password: "student1",
      },
      {
        username: "student2",
        password: "student2",
      },
      {
        username: "student3",
        password: "student3",
      },
    ];

    await queryInterface.bulkInsert("Students", students);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Students", null, {});
  },
};
