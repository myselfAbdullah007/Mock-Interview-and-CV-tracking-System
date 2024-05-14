//BackEnd/Models/Jobs_Model.js
const mongo = require('mongoose');
const { isURL } = require('validator');

const JobModel  = new mongo.Schema({
    title: {
        type: String,
        required: [true, "title is must"],
        unique: true
    },

    description: {
        type: String,
        required: [true, "description is  must"]
        
    },
    status:{
        type:String,
        required:[true, 'status is required'],
    },

    salary: {
        type: String,
        required: [true, 'Salary is required'],
    },

    deadline: {
        type: String,
        required: [true, 'deadline is must']
    },

    applicant_id: {
        type: [String],
        required: [false, 'applicant_id is not required'],
        default:[],
    },

    isVerified: {
        type: Boolean,
        required: [false, 'Verification is not mandatory'], 
    },

    company_id:{
        type: String,
        required: [false, 'company_id is requierd']
    },
})


const jobModel = mongo.model('Jobs', JobModel )

module.exports = jobModel;