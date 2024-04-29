

const express = require('express');

const loginController = require('../controllers/UserControllers/login');
const signupController = require('../controllers/UserControllers/signup');

const UserRouter = express.Router();

//Login Route
UserRouter.post("/login", loginController);
//SignUp Route
UserRouter.post("/signup",signupController);


module.exports = UserRouter;