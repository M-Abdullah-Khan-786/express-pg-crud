const { Sequelize } = require("sequelize");
const { createUserModel } = require("../models/userSchema");

const sequelize = new Sequelize("postgres", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

let userModel = null;

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    userModel = await createUserModel(sequelize);
    await sequelize.sync();
    console.log("DataBase Synced");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const getUserModel = () => {
  if (!userModel) throw new Error("Database not initialized yet");
  return userModel;
};

module.exports = { connectDb, getUserModel };
