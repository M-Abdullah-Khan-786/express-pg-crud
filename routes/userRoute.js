const express = require("express");
const route = express.Router();
const { getAllUsers, createUsers, updateUsers, deleteUsers } = require("../controllers/userController");

route
    .get("/", getAllUsers)
    .post("/create", createUsers)
    .put("/update/:empId", updateUsers)
    .delete("/delete/:empId", deleteUsers);

module.exports = route;
