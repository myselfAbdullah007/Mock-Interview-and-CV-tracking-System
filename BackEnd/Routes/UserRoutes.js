

const express = require('express');

const loginController = require('../controllers/UserControllers/login');

const UserRouter = express.Router();

//Login Route
UserRouter.post("/login", loginController);


module.exports = UserRouter;