//BackEnd/controllers/UserControllers/getAllCompanies.js

const express = require("express");
const router = express.Router();
const companyModel = require("../../Models/Companies");

const getAllCompanies = async (req, res, next) => {
    try {
        console.log("In Backend API");
        const allCompanies = await companyModel.find();
        console.log(allCompanies);
        return res.status(200).json(allCompanies);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = getAllCompanies;
