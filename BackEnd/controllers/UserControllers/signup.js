//BackEnd/controllers/UserControllers/signup.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../Models/User_Model.js");

const secret = process.env.KEY;



const signup = async (req, res, next) => {
    const { name, username, email, password, status } = req.body;
    console.log(req.body);

    if (!name || !username || !email || !password || !status) {

        return res.status(400).json({ error: "All fields are required." });
    }
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ error: "User with this email already exists." });
        }


        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await userModel.create({
            f_name: name,
            username: username,
            email: email,
            password: hashedPassword,
            status: status,
        });

        const payload = {
            id: newUser._id,
        };
        const token = jwt.sign(payload, process.env.KEY, { expiresIn: "96h" });
        return res.status(201).json({
            message: "User created successfully",
            token: token,
            user: {
                id: newUser._id,
                f_name: newUser.name,
                username: newUser.username,
                email: newUser.email,
                status: newUser.status,
            },
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = signup;