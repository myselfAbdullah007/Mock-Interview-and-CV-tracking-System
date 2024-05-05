 //BackEnd/index.js
// const express = require('express')
 require("dotenv").config();

 var bodyParser = require('body-parser')
// const mongoose = require('mongoose');
// const cors = require("cors");
// const connection = require("./config/database.js");
// const UserRouter = require("./Routes/UserRoutes");
// const CompanyRouter = require("./Routes/CompanyRoutes.js");

// // -----| Configration |-----
// const app = express();

// app.use(cors());
// mongoose.set('strictQuery', false);
// app.use(express.urlencoded({ extended: true }))
// // app.use(fileUpload())
// app.use(express.json());

// connection();



// //Routes
// app.use('/', UserRouter);

// //-----| App listening |------
// const port = process.env.PORT || 8080;



// app.listen(port, () => {
//     console.log("server is running on port :" + port)
// })


const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const connection = require("./config/database.js");
const UserRouter = require("./Routes/UserRoutes");
const CompanyRouter = require("./Routes/CompanyRoutes.js");

// -----| Configuration |-----
const app = express();
const companyApp = express(); // Create a new Express app for companies

// Set up middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.set('strictQuery', false);

companyApp.use(cors());
companyApp.use(express.urlencoded({ extended: true }));
companyApp.use(express.json());
mongoose.set('strictQuery', false);

connection();

// Routes
app.use('/', UserRouter);
companyApp.use('/', CompanyRouter); // Use CompanyRouter with the new Express app for companies

// -----| App listening |------
const userPort = process.env.USER_PORT || 8080; // Port for handling user data
const companyPort = process.env.COMPANY_PORT || 4000; // Port for handling company data


app.listen(userPort, () => {
    console.log("\n                       -->>    User server is running on port: " + userPort +"    <<--");
});

companyApp.listen(companyPort, () => {
    console.log("                      -->>    Company server is running on port: " + companyPort +"    <<--");
});
