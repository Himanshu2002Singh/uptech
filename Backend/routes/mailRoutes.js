const express = require('express');
const router = express.Router();
const { sendEnrollmentEmail, getMailLogs ,sendConsultancyMail} = require('../controllers/mailController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/enroll', sendEnrollmentEmail);
router.get('/logs',  getMailLogs);


router.post('/send-consultancy-email', sendConsultancyMail);

module.exports = router;