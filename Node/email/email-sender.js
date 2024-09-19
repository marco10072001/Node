const nodemailer = require('nodemailer');

// Configurez le transporteur
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'monemail-email@gmail.com',
    pass: 'mon-email-password'
  }
});

// Options de l'e-mail
const mailOptions = {
  from: 'monemail-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
