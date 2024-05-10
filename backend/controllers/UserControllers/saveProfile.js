//BackEnd/controllers/UserControllers/login.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./../../Models/User_Model");

// Update profile endpoint
router.post('/saveProfile', async (req, res) => {
    console.log("inside backend");

    try {
        console.log("inside -> saveProfile <- try");
        const {  user, work, skills, education, projects, achievements, languages, interests } = req.body;

        // Create or update the profile in the database
        const profile = await userModel.findOneAndUpdate(
            { _id: user }, 
            {
                work,
                skills,
                education,
                projects,
                achievements,
                languages,
                interests
            },
            { new: true, upsert: true }
        );

        console.log(profile);

        res.status(200).json({ message: 'Profile saved successfully', profile });
    } catch (error) {
        console.error('Error saving profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
