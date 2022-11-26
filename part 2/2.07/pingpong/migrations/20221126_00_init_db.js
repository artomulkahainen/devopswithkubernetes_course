const { DataTypes } = require("sequelize");

async function up({ context: queryInterface }) {
  await queryInterface.createTable("pingpongs", {
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
  });
  await queryInterface.bulkInsert("pingpongs", [
    {
      id: 1,
      count: 0,
    },
  ]);
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable("pingpongs");
}

module.exports = { up, down };
