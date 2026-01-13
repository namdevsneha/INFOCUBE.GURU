import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const testNodemailer = async () => {
  console.log('Testing Nodemailer connection...\n');

  console.log('MAIL_AUTH:', process.env.MAIL_AUTH);
  console.log('PASS_AUTH:', process.env.PASS_AUTH);
  console.log('PASS_AUTH length:', process.env.PASS_AUTH?.length);
  console.log('');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_AUTH,
      pass: process.env.PASS_AUTH,
    },
  });

  try {
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('✓ Transporter verification successful!\n');

    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: process.env.MAIL_AUTH,
      to: 'sraj95922@gmail.com',
      subject: 'Nodemailer Test - Psychometric Assessment',
      text: 'This is a test email from the psychometric assessment system.',
      html: `
        <h2>Nodemailer Test</h2>
        <p>If you received this, nodemailer is working correctly!</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    });

    console.log('✓ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  } catch (error) {
    console.error('✗ Error:', error.message);
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Check MAIL_AUTH and PASS_AUTH in .env');
    }
    process.exit(1);
  }
};

testNodemailer();
