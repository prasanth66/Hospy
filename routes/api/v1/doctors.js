const express = require('express');

const router = express.Router();

const doctorsApi = require('../../../controllers/api/v1/doctors_api');


router.post('/login', doctorsApi.createSession);
router.post('/register',doctorsApi.doctorRregister);

module.exports = router;