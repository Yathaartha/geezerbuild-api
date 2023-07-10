"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const teachers = [
      {
        username: "teacher1",
        password: "teacher1",
      },
      {
        username: "teacher2",
        password: "teacher2",
      },
      {
        username: "teacher3",
        password: "teacher3",
      },
    ];

    await queryInterface.bulkInsert("Teachers", teachers);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teachers", null, {});
  },
};
