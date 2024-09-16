const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Make sure this path is correct

// Define routes with appropriate callback functions
router.post('/register', authController.registerUser); // Ensure registerUser is defined in authController
router.post('/login', authController.loginUser); // Ensure loginUser is defined in authController

module.exports = router;
