const express = require("express");
const router = express.Router();
const jobModel = require("../../Models/Jobs_Model");

const getJobsByIds = async (req, res) => {
    console.log("Inside -->> getJbsByIds  <<-- ");
    try {
        const jobIds = req.body.arr;
        console.log(jobIds);
        if (!jobIds || !Array.isArray(jobIds)) {
            return res.status(400).json({ error: "jobIds must be an array" });
        }
        
        const jobs = await jobModel.find({ _id: { $in: jobIds } });
        return res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = getJobsByIds;
