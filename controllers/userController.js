const asyncHandler = require("express-async-handler");

const User = require("../model/userModel");

/**
 * @desc                 Register new user
 * @route                POST /api/users
 * @access            Public
 */
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).send("Register user");
});

/**
 * @desc               Authenticate a user
 * @route              POST /api/user/login
 * @access          Public
 */
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Authenticate user" });
});

/**
 * @desc            Get user data
 * @route           GET /api/users/me
 * @access        Public
 */
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Get user data" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
