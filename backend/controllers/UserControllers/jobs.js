//BackEnd/controllers/UserControllers/jobs.js

const express = require("express");
const router = express.Router();
const jobModel = require("../../Models/Jobs_Model");

const getAllJobs = async (req, res, next) => {
    try {
        console.log("Inside getAllJobs' Try block");
        const alljobs = await jobModel.find();
        console.log(alljobs);
        return res.status(200).json(alljobs);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = getAllJobs;
