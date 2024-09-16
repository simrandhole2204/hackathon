const Jobs = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, company, location, description } = req.body;
  try {
    const Jobs= new Job({
      title,
      company,
      location,
      description,
      postedBy: req.user,
    });
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getJobs = async (req, res) => {
  try {
    const Jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
