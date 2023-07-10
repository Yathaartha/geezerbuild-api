"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
      "Students",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        username: { type: Sequelize.STRING, allowNull: false },
        password: { type: Sequelize.STRING, allowNull: false },
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
    queryInterface.dropTable("Students");
  },
};
