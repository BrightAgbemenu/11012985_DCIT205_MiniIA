
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

router.post('/submit-vitals', async (req, res) => {
  try {

    const { patientId, bloodPressure, temperature, pulse, spO2 } = req.body;

    const patient = await Patient.findById(patientId);

    patient.vitals = {
      bloodPressure,
      temperature,
      pulse,
      spO2
    };

    await patient.save();
    res.status(200).json({ message: 'Patient vitals submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while submitting patient vitals' });
  }
});

module.exports = router;