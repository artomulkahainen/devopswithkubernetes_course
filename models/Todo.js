const { DataTypes } = require("sequelize");
const { sequelize } = require("../db.js");

const Todo = sequelize.define(
  "todos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.INTEGER,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "todos",
    timestamps: true,
  }
);

module.exports = { Todo };
