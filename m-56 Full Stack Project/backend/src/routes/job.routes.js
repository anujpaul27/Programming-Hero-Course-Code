const express = require('express');
const { createJobPost, getAllJobPosts, getJobDetailsWithSpecificId } = require('../controllers/jobpost.controllers');
const jobApply = require('../controllers/apply.controller');
const { verifyToken, verifySeeker } = require('../middleware/auth.middlware');
const router = express.Router();

/**
 * @route   POST /api/job/create
 * @desc    Create a new job post
 * @access  Public
 */
router.post('/create', createJobPost);

/**
 * @route   GET /api/job/all
 * @desc    Get all job posts
 * @access  Private
 */
router.get('/all', verifyToken, getAllJobPosts);

/**
 * @route   GET /api/job/:id
 * @desc    Get the specific job by jobId
 * @access  Private
 */
router.get('/:id', getJobDetailsWithSpecificId)

/**
 * @route   POST /api/job/apply
 * @desc    post the applicant
 * @access  Private
 */
router.post('/apply/create', jobApply.jobApply)

/**
 * @route   POST /api/job/apply/count
 * @desc    Count length of free job application
 * @access  Private
 */
router.get('/apply/count/:id', jobApply.jobLengthCheck)



module.exports = router;