const express = require('express');
const { createJob, getJobs } = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createJob);
router.get('/', getJobs);

module.exports = router;
