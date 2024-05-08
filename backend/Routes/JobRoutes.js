
const express = require('express');
const saveJobController = require('../controllers/UserControllers/saveJob');




const JobRouter = express.Router();

JobRouter.get("/create-job",saveJobController);

module.exports = JobRouter;