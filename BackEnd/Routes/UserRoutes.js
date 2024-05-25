const express = require('express');

const loginController = require('../controllers/UserControllers/login');
const signupController = require('../controllers/UserControllers/signup');
const getUserController = require('../controllers/UserControllers/userData');
const getUserById = require('../controllers/UserControllers/singleUserData');
const getInterviewsbyid = require('../controllers/UserControllers/userInterviews');
const saveUserProfile = require('../controllers/UserControllers/saveProfile');
const saveUserInterview = require('../controllers/UserControllers/saveInterview');
const deleteUser = require('../controllers/UserControllers/deleteUser');
const verifyToken = require("../middleware/verifyTokens");

const UserRouter = express.Router();

// Login Route
UserRouter.post("/login", loginController);
// SignUp Route
UserRouter.post("/signup", signupController);
// Get Users Route
UserRouter.get("/", getUserController);
// Get User by ID Route
UserRouter.get("/:id", getUserById);
// Save User profile
UserRouter.post("/saveProfile", saveUserProfile);
// Save interview
UserRouter.post("/saveInterview", saveUserInterview);
// Get interview
UserRouter.get("/interviews:id", getInterviewsbyid);
// Delete User
UserRouter.delete("/deleteUser",deleteUser);
// protected route
UserRouter  .get("/protected", verifyToken, (req, res) => {
    res.status(200).json({ message: "This is a protected route", userId: req.userId });
});

module.exports = UserRouter;
