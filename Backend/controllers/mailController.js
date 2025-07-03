const { sendEmail } = require('../middleware/mailServices');
const { Mail } = require('../models/mail');

const sendEnrollmentEmail = async (req, res, next) => {
  try {
    const { name, email, phone, course } = req.body;

    const emailContent = `
      <h2>Thank you for enrolling in ${course.stack}!</h2>
      <p>Dear ${name},</p>
      <p>We have received your enrollment for:</p>
      <ul>
        <li><strong>Course:</strong> ${course.name}</li>
        <li><strong>Stack:</strong> ${course.stack}</li>
        <li><strong>Duration:</strong> ${course.duration}</li>
        <li><strong>Price:</strong> ${course.price}</li>
      </ul>
      <p>We'll contact you shortly at ${phone}.</p>
    `;

    await sendEmail(email, `Enrollment Confirmation - ${course.stack}`, emailContent);

    // Send admin notification
    const adminEmail = `
      <h2>New Enrollment</h2>
      <p><strong>Student:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Course:</strong> ${course.name} - ${course.stack}</p>
    `;

    await sendEmail(process.env.ADMIN_EMAIL, `New Enrollment: ${course.stack}`, adminEmail);

    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

const getMailLogs = async (req, res, next) => {
  try {
    const mails = await Mail.findAll({
      order: [['createdAt', 'DESC']],
      limit: 100
    });
    res.status(200).json(mails);
  } catch (error) {
    next(error);
  }
};

const sendConsultancyMail = async (req, res) => {
  const { email, contact, selectedService, problemStatement } = req.body;
  if (!email || !selectedService) {
    return res.status(400).json({ message: 'Email and service are required' });
  }

  const html = `
    <h2>Engineering Consultancy Request</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    <p><strong>Service:</strong> ${selectedService}</p>
    <p><strong>Problem:</strong><br/>${problemStatement}</p>
  `;

  try {
    await sendEmail('support@trustingbrains.com', 'New Engineering Consultancy Request', html);
    res.status(200).json({ message: 'Consultancy request sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};



module.exports = {
  sendEnrollmentEmail,
  getMailLogs,
  sendConsultancyMail
};