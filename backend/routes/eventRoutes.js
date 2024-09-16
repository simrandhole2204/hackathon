const express = require('express');
const { createEvent, getEvents, rsvpEvent } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', getEvents);
router.post('/:eventId/rsvp', authMiddleware, rsvpEvent);

module.exports = router;
