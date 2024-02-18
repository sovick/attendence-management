"use strict";
const { Model } = require("sequelize");
const Instructor = require("./instructor");
module.exports = (sequelize, DataTypes) => {
  class InstructorAttendence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InstructorAttendence.belongsTo(Instructor);
    }
  }
  InstructorAttendence.init(
    {
      date: DataTypes.DATE(6),
      operation: DataTypes.STRING,
      instructorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "InstructorAttendence",
    }
  );
  return InstructorAttendence;
};
