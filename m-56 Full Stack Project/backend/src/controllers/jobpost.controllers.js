const jobPostModel = require("../models/jobpost.model");

async function createJobPost (req,res) 
{
    try {
        const jobDetails = req.body;

        // Validate required fields
        const requiredFields = ['title', 'description', 'company', 'experience'];
        for (const field of requiredFields) {
            if (!jobDetails[field]) {
                return res.status(400).json({ error: `${field} is required` });
            }
        }

        // Create new job post in the database
        const newJobPost = await jobPostModel.create(jobDetails);
        res.status(201).json({
            message: 'Job post created successfully',
            jobPost: newJobPost,
        });

    } 
    catch (error) {
        res.status(500).json({
            message: `Error creating job post ${error.message}`,
        });
    }
}