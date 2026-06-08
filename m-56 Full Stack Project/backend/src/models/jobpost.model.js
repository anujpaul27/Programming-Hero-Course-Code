const mongoose = require('mongoose');


const jobPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        enum: ['Entry Level', 'Mid Level', 'Senior Level','lead'],
        default: 'Entry Level',
    },
    location: {
        type: String,
    },
    requirements: {
        type: [String],
        required: true,

    },
    salaryMax: {
        type: Number,
    },
    salaryMin :{
        type: Number,
    },
    type: {
        type: String,
        enum: ['Full Time', 'Part Time', 'Contract', 'Internship','remote'],
        default: 'Full Time',
    }

})