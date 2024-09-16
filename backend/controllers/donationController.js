const Donation = require('../models/Donation');

exports.makeDonation = async (req, res) => {
  const { amount } = req.body;
  try {
    const donation = new Donation({
      amount,
      donor: req.user,
    });
    await donation.save();
    res.json(donation);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ donor: req.user });
    res.json(donations);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
