//BackEnd/controllers/UserControllers/saveApplications.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jobModel = require("./../../Models/Jobs_Model");

router.post('/saveApplication', async (req, res) => {
    console.log("Inside save Application backend");

    try {
        console.log("inside -> saveApplication <- try");
        const {  job_id, applicant_id } = req.body;

        console.log(job_id, applicant_id);

        // Create or update the profile in the database
        const profile = await jobModel.findOneAndUpdate(
            { _id: job_id }, 
            {
                applicant_id
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
