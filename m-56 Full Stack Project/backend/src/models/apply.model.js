const mongoose = require('mongoose');

const applySchema = new mongoose.Schema({
    fullName: {
        type:String
    },
    email: {
        type:String
    },
    phone: {
        type:String
    },
    resumeLink: {   
        type:String
    },
    portfolioLink: {
        type:String
    },
    coverLetter: {
        type:String
    },
    jobId: {
        type:String
    },
    userId: {
        type:String
    }
    
})


const applyModel = mongoose.model('Job-Apply', applySchema);

module.exports = applyModel;
