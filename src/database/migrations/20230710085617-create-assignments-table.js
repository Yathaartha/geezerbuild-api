"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
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
        file: { type: Sequelize.STRING, allowNull: false },
      },
      {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("Assignments");
  },
};
