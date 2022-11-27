const Sequelize = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PW}` +
    `@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
);

const runMigrations = async () => {
  const migrator = new Umzug({
    migrations: {
      glob: "migrations/*.js",
    },
    storage: new SequelizeStorage({ sequelize, tableName: "migrations" }),
    context: sequelize.getQueryInterface(),
    logger: console,
  });

  const migrations = await migrator.up();

  console.log("Migrations up to date", {
    files: migrations.map((mig) => mig.name),
  });
};

const initDb = async () => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    console.log(
      "Connection has been established successfully and migrations have run."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit();
  }
};

module.exports = { sequelize, initDb };
