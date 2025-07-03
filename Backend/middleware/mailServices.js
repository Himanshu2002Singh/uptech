const nodemailer = require('nodemailer');
const Mail = require('../models/mail');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (to, subject, html) => {
  let mailRecord; // ✅ Declare outside to access in catch block

  try {
    // First create a mail record in database
    mailRecord = await Mail.create({
      recipient: to,
      subject,
      content: html,
      status: 'pending'
    });

    // Send the actual email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html
    };

    const info = await transporter.sendMail(mailOptions);

    // Update mail record as sent
    await mailRecord.update({ status: 'sent' });

    return info;
  } catch (error) {
    // Update mail record with error if failed
    if (mailRecord) {
      await mailRecord.update({
        status: 'failed',
        error: error.message
      });
    }
    throw error;
  }
};

module.exports = {
  sendEmail
};
