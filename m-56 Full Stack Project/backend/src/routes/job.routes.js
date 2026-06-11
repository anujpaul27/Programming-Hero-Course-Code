const express = require('express');
const { createJobPost, getAllJobPosts, getJobDetailsWithSpecificId } = require('../controllers/jobpost.controllers');
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
router.get('/all', getAllJobPosts);

/**
 * @route   GET /api/job/:id
 * @desc    Get the specific job by jobId
 * @access  Private
 */
router.get('/:id', getJobDetailsWithSpecificId)


module.exports = router;