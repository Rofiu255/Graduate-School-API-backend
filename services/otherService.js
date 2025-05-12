// services/otherService.js

// Placeholder for other services (e.g., email, file uploads, etc.)

// Example: Send an email (This is just a sample)
const nodemailer = require('nodemailer');  // For sending emails

exports.sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Email user from environment variable
        pass: process.env.EMAIL_PASS   // Email password from environment variable
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    };

    await transporter.sendMail(mailOptions);  // Send email
    console.log('Email sent successfully');
  } catch (err) {
    throw new Error('Failed to send email');
  }
};
