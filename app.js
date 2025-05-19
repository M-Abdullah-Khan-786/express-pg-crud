const express = require("express");
const { connectDb } = require("./database/connectDB");
require("dotenv").config();
const app = express();
const userRoute = require("./routes/userRoute");

app.use(express.json())

app.use('/api/user', userRoute)

connectDb();

module.exports = app;
