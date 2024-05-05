

const express = require('express');

const loginController = require('../controllers/UserControllers/login');
const signupController = require('../controllers/UserControllers/signup');
const getUserController = require('../controllers/UserControllers/userData');

const savecompanyController = require('../controllers/UserControllers/company');


const UserRouter = express.Router();

//Login Route
UserRouter.post("/login", loginController);
//SignUp Route
UserRouter.post("/signup",signupController);
//Get User Route
UserRouter.get("/",getUserController);

UserRouter.get("/",savecompanyController);

module.exports = UserRouter;