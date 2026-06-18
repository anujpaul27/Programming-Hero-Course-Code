const jobPostModel = require("../models/jobpost.model");

async function createJobPost (req,res) 
{
    try {
        const jobDetails = req.body;

        // Process requirements field (comma-separated string to array)
        const {requirements} = jobDetails;
        jobDetails.requirements = requirements.split(',').map(req => req.trim());

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
            success: true,
            message: 'Job post created successfully',
            jobPost: newJobPost,
        });

    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: `Error creating job post ${error.message}`,
        });
    }
}

async function getAllJobPosts (req,res)
{
    try {
        const query = {}
        if (req.body.jobtype)
        {
            query.type = req.body.jobtype;
        }

        {
            query.$or = [
                {title: {$regex:req.body.search,$options:'i'}},
                {description: {$regex:req.body.search,$options:'i'}},
            ]
        }
        console.log(query)
        const jobPosts = await jobPostModel.find(query);
        res.status(200).json({
            success: true,
            message: 'Job posts retrieved successfully',
            jobPosts,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: `Error retrieving job get ${error.message}`,
        });
    }
}

async function getJobDetailsWithSpecificId (req,res)
{
    const jobId = req.params.id;
    try 
    {
        const job = await jobPostModel.findById(jobId)

        if (!job)
        {
            return res.status(400).json({
                message: 'Job Not Found',
            })
        }

        res.status(200).json({
            job
        })
    }
    catch (error)
    {
        res.status(500).json({
            message: `Internal Server Error, ${error.message}`
        })
    }
}

module.exports = {
    createJobPost,
    getAllJobPosts,
    getJobDetailsWithSpecificId
};