const express = require('express');

const router = express.Router();
const patientsApi = require('../../../controllers/api/v1/patients_api');

router.use('/doctors', require('./doctors'));

router.use('/patients',require('./patients'))

router.post('/reports/:status',patientsApi.allReports);

module.exports = router;