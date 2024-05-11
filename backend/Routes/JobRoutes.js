
const express = require('express');
const getJobcontroller = require('../controllers/UserControllers/jobs');
const saveJobcontroller = require('../controllers/UserControllers/saveJob');
const saveApplicationcontroller = require('./../controllers/UserControllers/saveApplications');

const JobRouter = express.Router();

JobRouter.post("/create-job", saveJobcontroller);
JobRouter.get("/",getJobcontroller);
JobRouter.post("/saveApplication", saveApplicationcontroller);

module.exports = JobRouter;