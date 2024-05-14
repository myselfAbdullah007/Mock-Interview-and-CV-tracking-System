//BackEnd/controllers/UserControllers/saveInterview.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./../../Models/User_Model");

// Update profile endpoint
router.post('/saveInterview', async (req, res) => {
    console.log("inside backend");

    try {
        console.log("inside -> saveInterview <- try");
        const {  user, interviews } = req.body;
console.log(user, interviews);
        
        const profile = await userModel.findOneAndUpdate(
            { _id: user }, 
            {
                interviews
            },
            { new: true, upsert: true }
        );

        console.log(profile);

        res.status(200).json({ message: 'Profile updated successfully', profile });
    } catch (error) {
        console.error('Error saving profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
