

const express = require('express');

const login = require('../Controllers/UserController/Login.js');

const UserRouter = express.Router();


//Login Route
UserRouter.post("/login", login);



module.exports = UserRouter;