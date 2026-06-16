const express = require('express')
const router = express.Router()
const companyController = require('../controllers/company.controller')


/**
 * @route   POST api/company/create
 * @desc    Create company 
 */
router.post('/create', companyController.createCompany)

/**
 * @route   POST api/company/recruiterId
 * @desc    Create company 
 */
router.get('/:id', companyController.getCompanyWithRecruiterId)



module.exports = router