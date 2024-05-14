
const express = require('express');
const getJobcontroller = require('../controllers/UserControllers/jobs');
const getJobsByIds = require('./../controllers/UserControllers/getJobs');
const saveJobcontroller = require('../controllers/UserControllers/saveJob');
const saveApplicationcontroller = require('./../controllers/UserControllers/saveApplications');

const JobRouter = express.Router();

JobRouter.post("/create-job", saveJobcontroller);
JobRouter.get("/",getJobcontroller);
JobRouter.post("/saveApplication", saveApplicationcontroller);
JobRouter.post("/jobsByIds", getJobsByIds);

module.exports = JobRouter;