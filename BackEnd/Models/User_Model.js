//BackEnd/Models/User_Model.js
const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    f_name: {
        type: String,
        required: [true, "First name is must"]
    },

    username: {
        type: String,
        required: [true, "Last name is must"],
        unique: true
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },

    status: {
        type: String,
        required: [true, 'Company name is must']
    },

    password: {
        type: String,
        required: [true, 'password is required']
    },
   
    passwordResetToken: {
        type: String,
    },
    
    isVerified: {
        type: Boolean,
        required: [false, 'Verification is not mandatory'], 
    },

    work: {
        type: [String],
        required: [false, 'work array is not required'],
        default:[]
    },

    education: {
        type: [String],
        required: [false, 'education array is not required'],
        default:[]
    },

    interests: {
        type: [String],
        required: [false, 'interests array is not required'],
        default:[]
    },

    skills: {
        type: [String],
        required: [false, 'skills array is not required'],
        default:[]
    },
    projects: {
        type: [String],
        required: [false, 'projects array is not required'],
        default:[]
    },
    achievements: {
        type: [String],
        required: [false, 'Achievements array is not required'],
        default:[]
    },
    languages: {
        type: [String],
        required: [false, 'Languages array is not required'],
        default:[]
    },

    interviews: {
        type: [String],
        required: [false, 'interviews array is not required'],
        default:[]
    },

    contact: {
        type: String,
        required: [false, 'contact is not required']
    },

    linkedin: {
        type: String,
        required: [false, 'linkedin is not required']
    },

    github: {
        type: String,
        required: [false, 'github is not required']
    },
})


const userModel = mongo.model('user', userSchema)

module.exports = userModel;