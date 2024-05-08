//BackEnd/controllers/UserControllers/getAllUsers.js

const express = require("express");
const router = express.Router();
const userModel = require("../../Models/User_Model.js");

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await userModel.find();
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = getAllUsers;
