
const express = require('express');
const saveJobController = require('../controllers/UserControllers/company');




const JobRouter = express.Router();

JobRouter.get("/create-job",saveJobController);

module.exports = JobRouter;