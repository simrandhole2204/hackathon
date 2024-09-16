const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { title, date, location, description } = req.body;
  try {
    const event = new Event({
      title,
      date,
      location,
      description,
      createdBy: req.user,
    });
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.rsvpEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    if (!event.attendees.includes(req.user)) {
      event.attendees.push(req.user);
      await event.save();
    }
    res.json(event);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
