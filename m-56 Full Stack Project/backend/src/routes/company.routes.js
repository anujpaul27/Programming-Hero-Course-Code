const express = require('express')
const router = express.Router()
const companyController = require('../controllers/company.controller')


/**
 * @route   POST api/company/create
 * @desc    Create company 
 */
router.post('/create', companyController.createCompany)



module.exports = router