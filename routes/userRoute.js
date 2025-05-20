const express = require("express");
const route = express.Router();
const { getAllUsers, createUsers, updateUsers, deleteUsers, getUserbyEmpId } = require("../controllers/userController");

route
    .get("/", getAllUsers)
    .get("/:empId", getUserbyEmpId)
    .post("/create", createUsers)
    .put("/update/:empId", updateUsers)
    .delete("/delete/:empId", deleteUsers);

module.exports = route;
