const express = require('express');
const { createJobPost, getAllJobPosts } = require('../controllers/jobpost.controllers');
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


module.exports = router;