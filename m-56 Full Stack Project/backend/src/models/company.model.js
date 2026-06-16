const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Company name is required"], trim: true },
    recruiterId: {type:String, required:[true, 'Recruiter Id is required']},
    industry: { type: String, required: [true, "Industry is required"] },
    location: { type: String, required: [true, "Location is required"] },
    employees: { type: String, default: "" },
    website: { type: String, default: "" },
    logo: { type: String, default: "" }, 
    description: { type: String, required: [true, "Description is required"] },
    status: { 
      type: String, 
      enum: ["Pending", "Approved", "Rejected"], 
      default: "Pending" 
    },
  },
  { timestamps: true }
);

const companyModel = mongoose.model('Company', CompanySchema);
module.exports = companyModel