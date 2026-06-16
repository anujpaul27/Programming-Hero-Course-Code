const companyModel = require("../models/company.model");


// @desc    Create new company 
// @route   POST /api/company/create
const createCompany = async (req, res) => {
  try {
    const { name,recruiterId, industry, location, employees, website, logo, description } = req.body;

    if (!name || !industry || !location || !description) {
      return res.status(400).json({ message: "Please enter required field!." });
    }

    const newCompany = await companyModel.create({
      name,
      recruiterId,
      industry,
      location,
      employees,
      website,
      logo, // ImageBB URL
      description,
      status: "Pending"
    });

    res.status(201).json({ message: "Company Create Successful.", data: newCompany });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!.", error: error.message });
  }
};

// @desc    get the company with recruiter ID 
// @route   GET /api/company/id

const getCompanyWithRecruiterId = async (req,res) =>
{
  try
  {
    const id = req.params.id;
    const cmp = await companyModel.find({recruiterId:id})

    res.status(201).json({
      data: cmp
    })
  }
  catch(err)  
  {
    res.status(404).json({
      message: err.message
    })
  }
    
}



module.exports = {
    createCompany,
    getCompanyWithRecruiterId
}