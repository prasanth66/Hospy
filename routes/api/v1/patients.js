const express = require('express');
const passport=require('passport');
const router = express.Router();

const patientsApi = require('../../../controllers/api/v1/patients_api');



router.post('/register',passport.authenticate('jwt',{session:false}),patientsApi.patientRegister);
router.post('/:id/create_report',patientsApi.createReport);
router.post('/:id/all_reports',patientsApi.patientReports);
module.exports = router;