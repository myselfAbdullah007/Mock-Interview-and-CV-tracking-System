// BackEnd/controllers/UserControllers/singleUserData.js

const express = require("express");
const router = express.Router();
const userModel = require("../../Models/User_Model.js");

const getUserById = async (req, res, next) => {
    const userId = req.params.id;
    try {
        console.log('entered in try block');
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = getUserById;