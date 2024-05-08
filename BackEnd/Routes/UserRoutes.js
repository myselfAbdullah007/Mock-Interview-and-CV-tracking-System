

const express = require('express');

const loginController = require('../controllers/UserControllers/login');
const signupController = require('../controllers/UserControllers/signup');
const getUserController = require('../controllers/UserControllers/userData');


const UserRouter = express.Router();

//Login Route
UserRouter.post("/login", loginController);
//SignUp Route
UserRouter.post("/signup",signupController);
//Get User Route
UserRouter.get("/",getUserController);

module.exports = UserRouter;