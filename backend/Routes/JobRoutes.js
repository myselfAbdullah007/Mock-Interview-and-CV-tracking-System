
const express = require('express');
const getJobcontroller = require('../controllers/UserControllers/jobs');
const saveJobcontroller = require('../controllers/UserControllers/saveJob');

const JobRouter = express.Router();

JobRouter.post("/create-job", saveJobcontroller);
JobRouter.get("/",getJobcontroller);

module.exports = JobRouter;