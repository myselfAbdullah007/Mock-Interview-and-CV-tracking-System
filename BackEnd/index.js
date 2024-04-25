//BackEnd/index.js
const express = require('express')
require("dotenv").config();

var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require("cors");
const connection = require("./config/database.js");
const UserRouter = require("./Routes/UserRoutes");

// -----| Configration |-----
const app = express();
app.use(cors());
mongoose.set('strictQuery', false);
app.use(express.urlencoded({ extended: true }))
// app.use(fileUpload())
app.use(express.json());

connection();



//Routes
app.use('/', UserRouter);

//-----| App listening |------
const port = process.env.PORT || 8080;



app.listen(port, () => {
    console.log("server is running on port :" + port)
})
