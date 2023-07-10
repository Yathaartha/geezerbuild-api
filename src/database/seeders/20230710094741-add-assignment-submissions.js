"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const assignmentSubmissions = [
      {
        assignmentId: 1,
        userId: 1,
        // file is a BLOB type, so we need to convert it to Buffer
        file: Buffer.from("Hello World"),
      },
      {
        assignmentId: 2,
        userId: 2,
        // file is a BLOB type, so we need to convert it to Buffer
        file: Buffer.from("Hello World 2"),
      },
      {
        assignmentId: 3,
        userId: 2,
        // file is a BLOB type, so we need to convert it to Buffer
        file: Buffer.from("Hello World 3"),
      },
      {
        assignmentId: 4,
        userId: 3,
        // file is a BLOB type, so we need to convert it to Buffer
        file: Buffer.from("Hello Class"),
      },
      {
        assignmentId: 5,
        userId: 3,
        // file is a BLOB type, so we need to convert it to Buffer
        file: Buffer.from("Hello Teacher"),
      },
    ];

    await queryInterface.bulkInsert(
      "AssignmentSubmissions",
      assignmentSubmissions,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AssignmentSubmissions", null, {});
  },
};
