const express = require("express");
const connectDb = require("./database/connectDB");
require("dotenv").config();
const app = express();

connectDb();

module.exports = app;
