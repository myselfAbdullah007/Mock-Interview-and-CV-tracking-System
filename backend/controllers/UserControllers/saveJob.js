// Import necessary modules and models
const express = require("express");
const router = express.Router();
const Job = require("./../../Models/Jobs_Model"); 

// Define the route handler for creating a new job
router.post("/create-job", async (req, res) => {
    try {
        console.log("Inside SaveJob's try block");
        const { title, description, status, salary, deadline } = req.body;

        if (!title || !description || !status || !salary || !deadline) {
            return res.status(400).json({ error: "Title, description, status, salary, and deadline are required." });
        }

        // Create a new job instance
        const newJob = new Job({
            title,
            description,
            status, 
            salary,
            deadline
        });

        // Save the new job to the database
        const savedJob = await newJob.save();
        console.log(savedJob);
        // Send a success response
        res.status(201).json({ message: "Job created successfully", job: savedJob });
    } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
