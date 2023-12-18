
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
router.post('/register', async (req, res) => {
  try {

    const { surname, otherNames, gender, phoneNumber, residentialAddress, emergencyContactName, emergencyContactPhone, relationshipWithPatient } = req.body;

    const patient = new Patient({
      surname,
      otherNames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyContactName,
      emergencyContactPhone,
      relationshipWithPatient
    });
    await patient.save();

    res.status(200).json({ message: 'Patient registered successfully' });
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'An error occurred while registering the patient' });
  }
});

module.exports = router;