"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Instructor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Instructor.hasMany(models.InstructorAttendence);
    }
  }
  Instructor.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      subject: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Instructor",
    }
  );
  return Instructor;
};
