 //BackEnd/index.js
// const express = require('express')
 require("dotenv").config();

 var bodyParser = require('body-parser')

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const connection = require("./config/database.js");
const UserRouter = require("./Routes/UserRoutes");
const CompanyRouter = require("./Routes/CompanyRoutes.js");
const JobRouter = require("./Routes/JobRoutes.js");

// -----| Configuration |-----
const app = express();
const companyApp = express();
const jobApp = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.set('strictQuery', false);

companyApp.use(cors());
companyApp.use(express.urlencoded({ extended: true }));
companyApp.use(express.json());
mongoose.set('strictQuery', false);

jobApp.use(cors());
jobApp.use(express.urlencoded({extended: true}));
jobApp.use(express.json());
mongoose.set('strictQuery', false);

connection();

// Routes
app.use('/', UserRouter);
companyApp.use('/', CompanyRouter); 
jobApp.use('/', JobRouter);

// -----| App listening |------
const userPort = process.env.USER_PORT || 8080; // Port for handling user data
const companyPort = process.env.COMPANY_PORT || 4000; // Port for handling company data
const jobPort = process.env.JOB_PORT || 5000; // Port for handling job data


app.listen(userPort, () => {
    console.log("\n                       -->>    User server is running on port: " + userPort +"    <<--");
});

companyApp.listen(companyPort, () => {
    console.log("                     -->>    Company server is running on port: " + companyPort +"    <<--");
});

jobApp.listen(jobPort, () => {
    console.log("                      -->>    Job server is running on port: " + jobPort +"    <<--");
});