const { getUserModel } = require("../database/connectDB");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await getUserModel().findAll();
    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
    });
  }
};

exports.getUserbyEmpId = async (req, res) => {
  const {empId } = req.params;
  try {
    const user = await getUserModel().findOne({ where: { empId } });
      return res.status(201).json({
        success: true,
        message: "User retrieved successfully",
        data: user,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error retrieving user",
    });
  }
};

exports.createUsers = async (req, res) => {
  const { name, email, designation, empId } = req.body;
  try {
    const user = await getUserModel().findOne({ where: { empId } });
    if (user == null) {
      const user = await getUserModel().create({
        name,
        email,
        designation,
        empId,
      });
      return res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
      });
    }
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error creating users",
    });
  }
};

exports.updateUsers = async (req, res) => {
  const { empId } = req.params;
  try {
    const user = await getUserModel().update(req.body, { where: { empId } });
    if (user[0] == 0) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error updating users",
    });
  }
};

exports.deleteUsers = async (req, res) => {
  const { empId } = req.params;
  try {
    const user = await getUserModel().findOne({ where: { empId } });
    if (user == null) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    await user.destroy();
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error updating users",
    });
  }
};
