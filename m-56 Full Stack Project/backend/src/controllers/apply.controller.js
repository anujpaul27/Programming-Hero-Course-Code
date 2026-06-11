const applyModel = require("../models/apply.model");

async function jobApply (req,res)
{
    try
    {
        const applicant = req.body;
        
        if (!applicant)
        {
            return res.status(404).json({
                message: 'Applicant Details not found!.'
            })
        }

        const application  = applyModel.create(applicant)

        res.status(201).json({
            message: 'Application Successful.'
        })
    }
    catch (err)
    {
        res.status(500).json({
            message: err.message 
        })
    }
}