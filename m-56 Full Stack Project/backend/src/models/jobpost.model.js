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
        required: true,
    },
    location: {
        type: String,
    },
    requirements: {
        type: [String],
        required: true,

    },
    salaryMax: {
        type: String,
    },
    salaryMin :{
        type: String,
    },
    type: {
        type: String,
    },
    creatorId: {
        type: String,
    },
    creator:{
        type: String,
    },
    image: {
        type: String,
    }
})

const jobPostModel = mongoose.model('JobPost', jobPostSchema);

module.exports = jobPostModel;
