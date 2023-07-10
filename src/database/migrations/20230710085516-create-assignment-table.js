"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
      "Assignment",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        title: { type: Sequelize.STRING, allowNull: false },
        detail: { type: Sequelize.STRING, allowNull: false },
        dueDate: { type: Sequelize.DATE, allowNull: false },
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
    queryInterface.dropTable("Assignment");
  },
};
