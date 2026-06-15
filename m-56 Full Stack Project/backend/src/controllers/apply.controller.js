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

async function jobLengthCheck(req, res) {
  try {
    // 1. Extract id from req.params, not global params
    const { id } = req.params; 
    
    // 2. Use await and .countDocuments() for performance, or .find() to get data
    const length = await applyModel.countDocuments({ userId: id }); 
    
    // 3. Return a successful 200 response with the data
    return res.status(200).json({ success: true, count: length });
    
  } catch (error) {
    // 4. Return the 500 error response
    return res.status(500).json({ success: false, message: error.message });
  }
}



module.exports = {
    jobApply,
    jobLengthCheck,
}