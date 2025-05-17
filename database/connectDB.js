const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDb;
