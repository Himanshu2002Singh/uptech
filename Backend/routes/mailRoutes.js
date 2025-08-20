const express = require('express');
const router = express.Router();
const { sendEnrollmentEmail, getMailLogs ,sendConsultancyMail, sendCourseInquiryMail} = require('../controllers/mailController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/enroll', sendEnrollmentEmail);
router.get('/logs',  getMailLogs);


router.post('/send-consultancy-email', sendConsultancyMail);
router.post("/send-course-inquiry", sendCourseInquiryMail); // 👈 new 


module.exports = router;