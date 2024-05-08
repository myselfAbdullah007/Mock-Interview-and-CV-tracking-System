
const express = require('express');

const savecompanyController = require('../controllers/UserControllers/company');

const getCompanyController = require('../controllers/UserControllers/companyData');



const CompanyRouter = express.Router();

CompanyRouter.get("/",getCompanyController);

module.exports = CompanyRouter;