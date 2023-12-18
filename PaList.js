 
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
router.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find({}, 'patientId surname otherNames');

    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the patient list' });
  }
});

module.exports = router;