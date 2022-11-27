const { DataTypes } = require("sequelize");
const { sequelize } = require("../db.js");

const Pingpong = sequelize.define(
  "pingpongs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    modifiedAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    count: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "pingpongs",
  }
);

module.exports = { Pingpong };
