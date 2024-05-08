//BackEnd/Models/User_Model.js
const mongo = require('mongoose');
const { isURL } = require('validator');

const CompanyModel  = new mongo.Schema({
    company_name: {
        type: String,
        required: [true, "Company name is must"],
        unique: true
    },

    industry: {
        type: String,
        required: [true, "industry name is must"]
        
    },

    location: {
        type: String,
        required: [true, 'location is required'],
        unique: true
    },

    website: {
        type: String,
        required: [false, 'website link is not must'],
        unique: true,
        validate: {
            validator: (value) => isURL(value), // Validate URL using validator library
            message: 'Invalid website URL'
        }
    },

    jobs: {
        type: [String],
        required: [false, 'jobs array is not required'],
        default:[]
    },

})


const companyModel = mongo.model('companies', CompanyModel )

module.exports = companyModel;