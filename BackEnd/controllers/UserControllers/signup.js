//BackEnd/controllers/UserControllers/signup.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../Models/User_Model.js");

const secret = process.env.KEY;

const signup = async (req, res, next) => {
    const { f_name, username, email, password, status } = req.body;

    // Check if all required fields are provided
    if (!f_name || !username || !email || !password || !status) {
        return res.status(400).json({ error: "All fields are required." });
    }
  

    
    try {
        // Check if the email or username is already registered
        const existingUser = await userModel.findOne({ $or: [{ email: email }, { username: username }] });
        if (existingUser) {
            return res.status(409).json({ error: "Email or username is already registered." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new userModel({
            f_name: f_name,
            username: username,
            email: email,
            password: hashedPassword,
            status: status
        });

        // Save the user to the database
        await newUser.save();

        return res.status(201).json({ message: "User created successfully." });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal server error." });
    }
};

module.exports = signup;
