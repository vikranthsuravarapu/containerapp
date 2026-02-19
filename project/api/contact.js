import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

router.post('/contact', async (req, res) => {
  console.log('Received POST /api/contact', req.body); // Debug log
  const { name, email, message } = req.body;
  try {
    await transporter.sendMail({
      from: EMAIL_USER, // Always your Gmail address
      to: 'csquare.co.in@gmail.com',
      replyTo: email, // <-- This lets you reply directly to the customer
      subject: `New message from ${name}`,
      text: message,
    });
    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (err) {
    console.error('Error sending email:', err); // Debug log
    res.status(500).json({ success: false, message: 'Error sending email', error: err.message });
  }
});

export default router;
