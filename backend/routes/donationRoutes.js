const express = require('express');
const { makeDonation, getDonations } = require('../controllers/donationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, makeDonation);
router.get('/', authMiddleware, getDonations);

module.exports = router;
