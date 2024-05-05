const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Company = require("./../../Models/Companies");

const secret = process.env.KEY;

// Define the route handler for creating a new company
router.post("/create-company", async (req, res) => {
    try {
        const { company_name, industry, location, website, jobs } = req.body;

        // Check if the required fields are provided
        if (!company_name || !industry || !location) {
            return res.status(400).json({ error: "Company name, industry, and location are required." });
        }

        // Create a new company instance
        const newCompany = new Company({
            company_name,
            industry,
            location,
            website,
            jobs
        });

        // Save the new company to the database
        const savedCompany = await newCompany.save();

        // Send a success response
        res.status(201).json({ message: "Company created successfully", company: savedCompany });
    } catch (error) {
        console.error("Error creating company:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
