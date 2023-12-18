
const express = require('express');
const router = express.Router();
const Encounter = require('../models/encounter');

router.post('/start-encounter', async (req, res) => {
  try {

    const { patientId, date, time, encounterType } = req.body;

    const encounter = new Encounter({
      patientId,
      date,
      time,
      encounterType
    });
    await encounter.save();


    res.status(200).json({ message: 'Encounter started successfully' });
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'An error occurred while starting the encounter' });
  }
});

module.exports = router;