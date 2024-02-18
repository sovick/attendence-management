"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("InstructorAttendences", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      date: {
        type: Sequelize.DATE(6),
      },
      operation: {
        type: Sequelize.STRING,
      },
      instructorId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Instructors",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("InstructorAttendences");
  },
};
