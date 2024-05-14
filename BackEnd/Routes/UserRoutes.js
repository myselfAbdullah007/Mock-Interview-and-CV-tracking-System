const express = require('express');

const loginController = require('../controllers/UserControllers/login');
const signupController = require('../controllers/UserControllers/signup');
const getUserController = require('../controllers/UserControllers/userData');
const getUserById = require('../controllers/UserControllers/singleUserData');
const getInterviewsbyid = require('../controllers/UserControllers/userInterviews');
const saveUserProfile = require('../controllers/UserControllers/saveProfile');
const saveUserInterview = require('../controllers/UserControllers/saveInterview');


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

module.exports = UserRouter;
